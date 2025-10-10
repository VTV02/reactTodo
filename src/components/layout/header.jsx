import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  HomeOutlined,
  BookOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  LoginOutlined,
  MoreOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
// import "./header.css";

import { Menu, notification } from "antd";
import { AuthContext } from "../context/auth.context";
import { loginAPI } from "../../services/api.service";

const Header = () => {
  const [current, setCurrent] = useState("");
  const { user } = useContext(AuthContext);
  console.log(">>>>Check user: ", user);

  const navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
  };
  const handleLogout = async () => {
    const res = await loginAPI();
    if (res.data) {
      localStorage.removeItem("access_token");
      setUser({
        email: "",
        phone: "",
        fullName: "",
        role: "",
        avatar: "",
        id: "",
      });
      notification.success({
        message: "Logout Successfully",
        description: "Logout successfully",
      });
      // redirect user
      navigate("/");
    }
  };
  const items = [
    {
      label: <Link to={"./"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"./users"}>Users</Link>,
      key: "users",
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to={"./books"}>Books</Link>,
      key: "books",
      icon: <BookOutlined />,
    },
    ...(!user.id
      ? [
          {
            label: <Link to={"./login"}>Login</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),
    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "Options",
            icon: <MoreOutlined />,
            children: [
              {
                label: "Logout",
                icon: <LogoutOutlined />,
                key: "logout",
              },
            ],
          },
        ]
      : []),

    {
      label: <Link to={"./register"}>Registers</Link>,
      key: "registers",
      icon: <UserAddOutlined />,
    },
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;

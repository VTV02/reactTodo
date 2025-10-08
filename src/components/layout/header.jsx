import { Link } from "react-router-dom";
import { useContext, useState } from "react";
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
import { Menu } from "antd";
import { AuthContext } from "../context/auth.context";

const Header = () => {
  const [current, setCurrent] = useState("");
  const { user } = useContext(AuthContext);

  const onClick = (e) => {
    setCurrent(e.key);
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

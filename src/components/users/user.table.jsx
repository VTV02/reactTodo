import { Table } from "antd";
import { fetchAllUserAPI } from "../../services/api.service";
import { useEffect, useState } from "react";

const UserTable = () => {
  const [dataUsers, setDataUsers] = useState([]);
  // Empty array. it'll run once
  useEffect(() => {
    console.log(">>>Running...");
    // render once
    loadUser();
  }, []);

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      key: "phone",
      dataIndex: "phone",
    },
  ];

  const loadUser = async () => {
    console.log(">>> run loadUser START");
    const res = await fetchAllUserAPI();
    console.log(">>> run loadUser END", res.data);
    setDataUsers(res.data);
  };

  console.log(">>>Run render...");
  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};

export default UserTable;

import { Table, Popconfirm } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import UpdateModalUser from "./update.user.modal";
import { redirect } from "react-router-dom";
const UserTable = (props) => {
  const { dataUsers } = props;
  const [isModalUpdate, setModalUpdate] = useState(false);
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => {
        return <a href="#!">{record._id}</a>;
      },
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
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
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <a className="text-warning">
            <EditOutlined
              onClick={() => {
                console.log(">>>Check record: ", record);
                setModalUpdate(true);
              }}
            />
            {record.name}
          </a>
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}>
            <a className="ms-5">
              <DeleteOutlined />
            </a>
          </Popconfirm>
        </>
      ),
    },
  ];

  console.log(">>>Run render...");
  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateModalUser
        setModalUpdate={setModalUpdate}
        isModalUpdate={isModalUpdate}
      />
    </>
  );
};

export default UserTable;

import { Table, Popconfirm } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import UpdateModalUser from "./update.user.modal";
const UserTable = (props) => {
  const { dataUsers, loadUser } = props;
  const [isModalUpdate, setModalUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
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
                setDataUpdate(record);

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

  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateModalUser
        setModalUpdate={setModalUpdate}
        isModalUpdate={isModalUpdate}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
    </>
  );
};

export default UserTable;

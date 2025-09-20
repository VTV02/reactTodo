import { Table, Popconfirm, notification } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import UpdateModalUser from "./update.user.modal";
import ViewUserDetail from "./view.user.detail";
import { deleteUserAPI } from "../../services/api.service";
import { use } from "react";
const UserTable = (props) => {
  const { dataUsers, loadUser } = props;
  const [isModalUpdate, setModalUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});
  const [dataDetail, setDataDetail] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [deleteUser, setDeleteUser] = useState({});
  const handleDeleteUser = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "Deleted user",
        description: "You đã mắc sai lầm rồi!",
      });
      await loadUser();
    }
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            href="#!"
            onClick={() => {
              setDataDetail(record);
              setDataDetail(record);
              setIsDetailOpen(true);
            }}>
            {record._id}
          </a>
        );
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
      // render lại dữ liệu, tương ứng với action được thực hiện
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
            title="Chắc chưa ní?"
            description="Định mệnh, xoá rồi lấy gì test?"
            placement="left"
            okText="Kệ"
            cancelText="Không dám"
            onConfirm={() => handleDeleteUser(record._id)}>
            <a className="ms-5 text-danger">
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
      <ViewUserDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isDetailOpen={isDetailOpen}
        setIsDetailOpen={setIsDetailOpen}
      />
    </>
  );
};

export default UserTable;

import { Table, Popconfirm } from "antd";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import UpdateModalUser from "./update.user.modal";
const UserTable = (props) => {
  // dataUsers được truyền từ page cha users xuống
  const { dataUsers } = props;
  // thực hiện tạo state để lưu trạng thái edit  modal
  const [isModalUpdate, setModalUpdate] = useState(false);
  // tạo state để thực hiện lấy data từ modal
  const [dataUpdate, setDataUpdate] = useState({});

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      // render lại dữ liệu, record đóng vai trò như một object ta có thể truy cập được các thành phần trong đó
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
      // render lại dữ liệu, tương ứng với action được thực hiện
      render: (_, record) => (
        <>
          <a className="text-warning">
            {/* edit button khi nhấn vào thì thực hiện */}
            <EditOutlined
              // thực hiện setDataUpdate bằng record tương ứng
              onClick={() => {
                setDataUpdate(record);
                // thực hiện set trạng thái update là true để mở modal lên khi nhấn edit
                setModalUpdate(true);
              }}
            />
            {record.name}
          </a>
          {/* tương tự thì ta cũng có event tương ứng với delete */}
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
  console.log(">>>Check data update: ", dataUpdate);
  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateModalUser
        // thực hiện truyền sự kiện này qua các component khác
        setModalUpdate={setModalUpdate}
        isModalUpdate={isModalUpdate}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
      />
    </>
  );
};

export default UserTable;

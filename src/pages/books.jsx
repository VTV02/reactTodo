import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, Table, message } from "antd";
import "antd/dist/reset.css";

const BookLibrary = () => {
  // Dữ liệu mẫu (thường thì bạn sẽ fetch từ API)
  const data = [
    {
      _id: "6a8b1c9d",
      title: "Lão Hạc",
      price: 50000,
      quantity: 10,
      author: "Nam Cao",
    },
    {
      _id: "7e4f2a0c",
      title: "Số Đỏ",
      price: 75000,
      quantity: 5,
      author: "Vũ Trọng Phụng",
    },
  ];

  // Hàm xử lý khi người dùng xác nhận xoá
  const handleDeleteUser = (bookId) => {
    // Logic xoá dữ liệu ở đây (ví dụ: gọi API)
    console.log("Deleting book with id:", bookId);
    message.success(`Đã xoá sách có ID: ${bookId}`);
  };

  const columns = [
    {
      title: "STT",
      // Thêm key để React không báo warning
      key: "stt",
      render: (_, record, index) => <>{index + 1}</>,
    },
    {
      title: "Id",
      dataIndex: "_id",
      key: "_id",
      render: (id) => <a href="#!">{id}</a>,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      // Ví dụ render để định dạng tiền tệ
      render: (price) => `${price.toLocaleString()} VNĐ`,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          {/* Sửa: Bỏ {record.name} vì không có trong dữ liệu */}
          <a
            className="text-warning"
            onClick={() => {
              // Logic mở modal update ở đây
              console.log("Editing book:", record);
            }}>
            <EditOutlined />
          </a>
          <Popconfirm
            title="Chắc chưa ní?"
            description="Định mệnh, xoá rồi lấy gì test?"
            placement="left"
            okText="Kệ"
            cancelText="Không dám"
            onConfirm={() => handleDeleteUser(record._id)}>
            <a className="text-danger">
              <DeleteOutlined />
            </a>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        // Sửa: Thêm dataSource và rowKey
        dataSource={data}
        rowKey="_id"
      />
    </>
  );
};

export default BookLibrary;

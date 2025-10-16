import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, Table, message } from "antd";
import "antd/dist/reset.css";
import BookTable from "../components/book/book.table";
import { useState } from "react";

const BookPage = () => {
  return (
    <div>
      <BookTable />
    </div>
  );
};

export default BookPage;

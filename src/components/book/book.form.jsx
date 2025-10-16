import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createBookAPI } from "../../services/api.service";

const BookForm = (props) => {
  const { loadUser } = props;
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resetAndCloseModal = () => {
    setMainText("");
    setAuthor("");
    setPrice("");
    setQuantity("");
  };
  const handleSubmit = async () => {
    const res = await createBookAPI(mainText, author, price, quantity);
    // thực hiện, thông báo nếu user được tạo thành công
    if (res.data) {
      notification.success({
        message: "Created user",
        description: "Created user successfully",
      });
    }
    await loadUser();
    resetAndCloseModal();
  };

  return (
    <div className="user-form" style={{ margin: "10px 0" }}>
      <div
        style={{ display: "flex", gap: "15px", flexDirection: "column" }}
        className="ms-3 me-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="text-warning">Table Users</h3>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Create new user
          </Button>
          <Modal
            title="Create User"
            closable={{ "aria-label": "Custom Close Button" }}
            open={isModalOpen}
            onOk={() => {
              handleSubmit();

              setIsModalOpen(false);
            }}
            onCancel={() => {
              setIsModalOpen(false);
            }}
            maskClosable={false}
            okText="Add">
            <div>
              <div>
                <span>Title</span>
                <Input
                  value={mainText}
                  onChange={(event) => {
                    setMainText(event.target.value);
                  }}
                />
              </div>
              <div>
                <span>Author</span>
                <Input
                  onChange={(event) => {
                    setAuthor(event.target.value);
                  }}
                />
              </div>
              <div>
                <span>Quantity</span>
                <Input
                  onChange={(event) => {
                    setQuantity(event.target.value);
                  }}
                />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default BookForm;

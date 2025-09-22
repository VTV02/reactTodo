import { Input, Button, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";
const UserForm = (props) => {
  const { loadUser } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resetAndCloseModal = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  const handleSubmit = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
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
                <span>Full Name</span>
                <Input
                  value={fullName}
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
                />
              </div>
              <div>
                <span>Email</span>
                <Input
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div>
                <span>Password</span>
                <Input.Password
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
              <div>
                <span>Phone number</span>
                <Input
                  onChange={(event) => {
                    setPhone(event.target.value);
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

export default UserForm;

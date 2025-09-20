import { Input, Button, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";

const UserForm = (props) => {
  const { loadUser } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // state cập nhật trạng thái mở của modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resetAndCloseModal = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  // lấy dữ liệu từ form và tạo user theo đúng form
  const handleSubmit = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    // thực hiện, thông báo nếu user được tạo thành công
    if (res.data) {
      notification.success({
        message: "Created user",
        description: "Created user successfully",
      });
    }
    // thực hiện load user khi đã tạo thành công
    await loadUser();
    // đóng và reset các ô trong form
    resetAndCloseModal();
  };

  return (
    <div className="user-form" style={{ margin: "10px 0" }}>
      <div
        style={{ display: "flex", gap: "15px", flexDirection: "column" }}
        className="ms-3 me-3">
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="text-warning">Table Users</h3>
          {/* Khi nhấn Create new user thì ta set cho trạng thái là true */}
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Create new user
          </Button>
          <Modal
            title="Create User"
            closable={{ "aria-label": "Custom Close Button" }}
            // đặt vô open là trạng thái mới được cập nhật
            open={isModalOpen}
            // khi nhấn ok thì thực hiện hàm handleSubmit
            onOk={() => {
              handleSubmit();
              // cập nhật lại trạng thái là false thì sẽ tắt modal
              setIsModalOpen(false);
            }}
            // nhấn cancel thì nó cũng set trạng thái là false
            onCancel={() => {
              setIsModalOpen(false);
            }}
            // tắt nhấn ra ngoài để tắt modal
            maskClosable={false}
            okText="Add">
            <div>
              <div>
                <span>Full Name</span>
                <Input
                  value={fullName}
                  // hàm onChange sẽ cho ta biến là event khi điền vô đó thì sẽ lấy được value
                  onChange={(event) => {
                    // cập nhật vô trạng thái setFullName
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

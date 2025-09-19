import { Input, notification, Modal } from "antd";
import { createUserAPI } from "../../services/api.service";
import { useState } from "react";

const UpdateModalUser = (props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const { isModalUpdate, setModalUpdate } = props;

  const resetAndCloseModal = () => {
    setFullName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };
  const handleSubmit = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
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
    <Modal
      title="Edit A User"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalUpdate}
      onOk={() => {
        handleSubmit();

        setModalUpdate(false);
      }}
      onCancel={() => {
        setModalUpdate(false);
      }}
      maskClosable={false}
      okText="Update">
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
  );
};

export default UpdateModalUser;

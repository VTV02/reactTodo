import { Input, Button, notification, message } from "antd";
import { useState } from "react";
import createUserAPI from "../../services/api.service";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const clickHandle = async () => {
    const res = await createUserAPI(fullName, email, password, phone);
    if (res.data && res.data.data) {
      notification.success({
        message: "Create user",
        description: "",
      });
    }
  };

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div
        style={{ display: "flex", gap: "15px", flexDirection: "column" }}
        className="ms-3 me-3">
        <div>
          <span>Full name</span>
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
        <div>
          <Button type="primary" onClick={clickHandle}>
            Create new user
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

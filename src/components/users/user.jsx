import { Input, Button } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("hoitaolamchi");
  const [email, setEmail] = useState("lucifer@");
  const [password, setPassword] = useState("Sn@2025#");
  const [phone, setPhone] = useState("");

  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
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
          <Input />
        </div>
        <div>
          <span>Password</span>
          <Input.Password />
        </div>
        <div>
          <span>Phone number</span>
          <Input />
        </div>
        <div>
          <Button type="primary">Create new user</Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;

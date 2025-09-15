import { Form, Input, Button, Card } from "antd";
import { useState } from "react";

const UserForm = () => {
  const [fullName, setFullName] = useState("hoitaolamchi");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card title="Register" className="w-full max-w-md shadow-md rounded-lg">
        <Form layout="vertical">
          <Form.Item label="Full Name" name="fullname">
            <Input placeholder="Enter your full name" value={fullName} />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item label="Phone Number" name="phone">
            <Input placeholder="Enter your phone number" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block>
              Create User
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default UserForm;

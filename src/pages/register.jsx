import { Form, Input, Button } from "antd";

const RegisterPage = () => {
  return (
    <Form layout="vertical">
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}>
        <Input />
      </Form.Item>

      <div className="d-flex flex-column gap-3 mt-3 ms-3 me-3">
        <div>
          <label htmlFor="">Full Name</label>
          <Input></Input>
        </div>
        <div>
          <label htmlFor="">Email</label>
          <Input type="text"></Input>
        </div>
        <div>
          <label htmlFor="">Password</label>
          <Input.Password></Input.Password>
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <Input type="text"></Input>
        </div>
        <div>
          <Button type="primary">Register</Button>
        </div>
      </div>
    </Form>
  );
};

export default RegisterPage;

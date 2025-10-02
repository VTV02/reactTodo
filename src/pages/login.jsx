import { Form, Input, Button, Card } from "antd";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}>
      <Card style={{ width: 400 }}>
        <h2 style={{ marginBottom: 20 }}>Login</h2>
        <Form
          name="loginForm"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter email!" }]}>
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter password!" }]}>
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Link to="/">Go to homepage →</Link>
            </div>
          </Form.Item>

          <div style={{ textAlign: "center", marginTop: 20 }}>
            Do you have account?{" "}
            <Link to="/register" style={{ color: "#722ed1" }}>
              Register now
            </Link>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;

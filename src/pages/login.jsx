import { Form, Input, Button, Card, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const LoginPage = () => {
  const [isDone, setIsDone] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const onFinish = async (values) => {
    setIsDone(true);
    try {
      const res = await loginAPI(values.email, values.password);
      if (res.data) {
        message.success("Login Success");
        localStorage.setItem("access_token", res.data.access_token);
        setUser(res.data.user);
        navigate("/");
      } else {
        message.error("Login Failed");
      }
    } catch (error) {
      message.error("Something went wrong!");
    } finally {
      setIsDone(false);
    }
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
          onFinish={onFinish}>
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
            <Input.Password
              placeholder="Type your password"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  Form.submit();
                }
              }}
            />
          </Form.Item>

          <Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}>
              <Button type="primary" htmlType="submit" loading={isDone}>
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

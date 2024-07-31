import React from "react";
import "./Login.scss";
import { Button, Col, Form, Input, Row } from "antd";
import Cup from "../assets/coffee-cup.png";
import Smoke from "../assets/smoke.png";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Login = () => {
  const [form] = Form.useForm();
  return (
    <Row className="log-in-area">
      <Col
        className="log-in-left"
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={12}
        xxl={12}
      >
        <div className="left-content">
          <div className="cup-img-wrap">
            <img className="cup" src={Cup} alt="" />
          </div>
          <div className="smoke-img-wrap">
            <img className="smoke" src={Smoke} alt="" />
          </div>
          <div className="smoke-img-wrap">
            <img className="smoke2" src={Smoke} alt="" />
          </div>
          <div className="smoke-img-wrap">
            <img className="smoke3" src={Smoke} alt="" />
          </div>
          <h1>Welcome to Kofishia</h1>
        </div>
      </Col>
      <Col
        className="log-in-right"
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={12}
        xxl={12}
      >
        <h1>Please Login</h1>
        <Form
          // onFinish={handleLogin}
          layout="vertical"
          requiredMark="optional"
          form={form}
          className="form"
        >
          <Row className="form-row">
            <Col span={24}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                  {
                    pattern:
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email address!",
                  },
                ]}
              >
                <Input
                  size="large"
                  prefix={<MailOutlined style={{ color: "#ccc" }} />}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  prefix={<LockOutlined style={{ color: "#ccc" }} />}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button
                  className="custom-btn"
                  block
                  type="primary"
                  htmlType="submit"
                  size="large"
                  // loading={loading}
                >
                  Login
                </Button>
              </Form.Item>
              <p>
                Don't Have an account?{" "}
                <Link to="/signUp">
                  <span>Sign Up</span>
                </Link>
                &nbsp;here
              </p>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;

import React from "react";
import { Button, Col, Form, Input, Row } from "antd";
import "./SignUp.scss";
import Cup from "../assets/coffee-cup.png";
import Smoke from "../assets/smoke.png";

const SignUp = () => {
  const [form] = Form.useForm();

  return (
    <Row className="sign-up-area">
      <Col
        className="sign-up-left"
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
          <h1>Welcome to Coffeeshia</h1>
        </div>
      </Col>
      <Col
        className="sign-up-right"
        xs={24}
        sm={24}
        md={12}
        lg={12}
        xl={12}
        xxl={12}
      >
        <h1>Sign Up</h1>
        <Form
          //onFinish={handleAddCoffe}
          layout="vertical"
          requiredMark="optional"
          form={form}
          className="form"
        >
          <Row className="form-row">
            <Col span={24}>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input size="large" />
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
                <Input.Password size="large" />
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
                >
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default SignUp;

import React, { useContext } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import "./SignUp.scss";
import Cup from "../assets/coffee-cup.png";
import Smoke from "../assets/smoke.png";
import { AuthContext } from "../providers/AuthProvider";
import sendNotification from "../common/sendNotification";

const SignUp = () => {
  const [form] = Form.useForm();
  const { createUser, loading, setLoading } = useContext(AuthContext);
  console.log(loading);

  // Signup Handler
  const handleSignUp = (values) => {
    const { email, password } = values;
    console.log(email, password);
    createUser(email, password)
      .then((result) => {
        const createdAt = result?.user?.metadata?.creationTime;
        const user = { email, createdAt: createdAt };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              sendNotification(
                "success",
                "Success",
                `Signup Successfully!`,
                "topRight"
              );
              setLoading(false);
            }
          });
        console.log(result.user);
      })
      .catch((err) => {
        console.error(err.message);
        sendNotification("error", "Error", `Email Already Exists!`, "topRight");
        setLoading(false);
      });
  };

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
          onFinish={handleSignUp}
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
                  loading={loading}
                >
                  Sign Up
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

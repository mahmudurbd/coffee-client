import React from "react";
import "./AddCoffee.scss";
import { Button, Col, Form, Input, notification, Row } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import sendNotification from "../common/sendNotification";

const AddCoffee = () => {
  const [form] = Form.useForm();

  // Add Coffee Handler
  const handleAddCoffe = (values) => {
    console.log(values);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.resetFields();
        if (data.insertedId) {
          sendNotification(
            "success",
            "Success",
            `Coffee added successfully!`,
            "topRight",
            true
          );
        }
      })
      .catch((err) => {
        sendNotification(err);
      });
  };
  return (
    <>
      <div className="add-coffee-area">
        <div className="add-coffee-wrapper">
          <Button
            onClick={() => window.history.back()}
            type="text"
            style={{
              marginLeft: "-17px",
              // marginTop: "-100px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
            }}
          >
            <LeftOutlined />
            Back to Home
          </Button>
          <div className="add-coffee-content">
            <h2 style={{ fontSize: "45px", textAlign: "center" }}>
              Add New Coffee
            </h2>
            <p style={{ fontSize: "18px", textAlign: "center" }}>
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
            <Form
              onFinish={handleAddCoffe}
              layout="vertical"
              requiredMark="optional"
              form={form}
            >
              <Row gutter={10}>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Field is required!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter Coffe name" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[
                      {
                        required: true,
                        message: "Field is required!",
                      },
                    ]}
                  >
                    <Input placeholder="Available quantity" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Supplier"
                    name="supplier"
                    rules={[
                      {
                        required: true,
                        message: "Field is required!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter coffee supplier" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Taste"
                    name="taste"
                    rules={[
                      {
                        required: true,
                        message: "Field is required!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter coffee taste" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Category"
                    name="category"
                    rules={[
                      {
                        required: true,
                        message: "Field is required!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter coffee category" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
                  <Form.Item
                    label="Details"
                    name="details"
                    rules={[
                      {
                        required: true,
                        message: "Field is required!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter coffee details" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <Form.Item
                    label="Photo"
                    name="photo"
                    rules={[
                      {
                        required: true,
                        message: "Field is required!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter photo url" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                  <Form.Item>
                    <Button
                      className="custom-btn"
                      type="primary"
                      htmlType="submit"
                      size="large"
                      block
                    >
                      Add Coffee
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCoffee;

import { LeftOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateCoffee.scss";
import sendNotification from "../common/sendNotification";

const UpdateCoffe = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [singleCoffee, setSingleCoffee] = useState({});
  console.log(singleCoffee);
  const { _id, photo, name, supplier, quantity } = singleCoffee;

  useEffect(() => {
    fetch(`http://localhost:5000/coffee/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleCoffee(data);
        form.setFieldsValue(data);
      });
  }, []);

  const handleUpdateCoffe = (values) => {
    console.log("updated", values);

    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          sendNotification(
            "success",
            "Success",
            `Coffee updated successfully!`,
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
    <div className="update-coffee-area">
      <div className="update-coffee-content">
        <div className="update-coffee-top">
          <Button
            onClick={() => window.history.back()}
            type="text"
            style={{
              marginLeft: "-18px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            <LeftOutlined />
            Back to Home
          </Button>
        </div>
        <div className="update-coffee-bottom">
          <h2 style={{ fontSize: "35px", textAlign: "center" }}>
            Update Existing Coffee Details
          </h2>
          <p
            style={{
              fontSize: "15px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <Form
            onFinish={handleUpdateCoffe}
            layout="vertical"
            requiredMark="optional"
            form={form}
            // initialValues={singleCoffee}
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
                    Update Coffee
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffe;

import React from "react";
import "./CoffeeCard.scss";
import { Button, Popconfirm, message } from "antd";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import sendNotification from "./sendNotification";

const CoffeeCard = ({ coffeeItem, coffeeData, setCoffeeData }) => {
  const { _id, photo, name, supplier, quantity } = coffeeItem;

  // Popconfirm Handler
  const confirm = (id) => {
    console.log(id);
    handleCoffeeDelete(id);
  };

  // Coffee Delete Handler
  const handleCoffeeDelete = (id) => {
    console.log("handle delete", id);
    fetch(`http://localhost:5000/coffee/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          sendNotification(
            "success",
            "Success",
            `Coffee item deleted successfully!`,
            "topRight"
          );
          const filteredCoffeeData = coffeeData.filter(
            (item) => item._id !== id
          );
          setCoffeeData(filteredCoffeeData);
        }
      });
  };
  console.log("from card", coffeeData);
  return (
    <div className="coffee-card">
      <div className="coffee-card-left">
        <div className="coffee-img">
          <img src={photo} alt="coffee-photo" width="90" height="110" />
        </div>
      </div>
      <div className="coffee-card-right">
        <div className="text-content">
          <p>
            <b>Name: </b>
            {name}
          </p>
          <p>
            <b>Supplier: </b>
            {supplier}
          </p>
          <p>
            <b>Quantity: </b>
            {quantity}
          </p>
        </div>
        <div className="icon-btn-area">
          <Link to={`/coffee/${coffeeItem._id}`}>
            <Button
              className="custom-btn"
              style={{ backgroundColor: "#D2B48C" }}
              type="primary"
              icon={<EyeOutlined />}
            />
          </Link>
          <Link to={`/updateCoffe/${_id}`}>
            <Button
              className="custom-btn"
              style={{ backgroundColor: "#3C393B" }}
              type="primary"
              icon={<EditOutlined />}
            />
          </Link>
          <Popconfirm
            title="Delete the coffee?"
            description="Are you sure to delete this Coffee?"
            onConfirm={() => confirm(coffeeItem._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              className="custom-btn"
              style={{ backgroundColor: "#EA4744" }}
              type="primary"
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

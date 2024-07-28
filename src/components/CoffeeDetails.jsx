import React from "react";
import { useLoaderData } from "react-router-dom";
import "./CoffeeDetails.scss";
import { Button } from "antd";
import { LeftOutlined } from "@ant-design/icons";

const CoffeeDetails = () => {
  const loadedCoffeDetails = useLoaderData();
  const { photo, name, category, supplier, quantity, taste, details } =
    loadedCoffeDetails;
  console.log(loadedCoffeDetails);
  return (
    <div className="coffee-details-area">
      <div className="coffee-details-content">
        <div className="coffee-details-top">
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
        <div className="coffee-details-bottom">
          <div className="details-bottom-left">
            <div className="details-img">
              <img src={photo} alt="" width="200px" />
            </div>
          </div>
          <div className="details-bottom-right">
            <h2>{category}</h2>
            <span>
              <b>Name: </b>
              {name}
            </span>
            <br />
            <p>
              <b>Quantity: </b>
              {quantity}
            </p>
            <p>
              <b>Supplier: </b>
              {supplier}
            </p>
            <p>
              <b>Taste: </b>
              {taste}
            </p>
            <span>
              <b>Details: </b>
              {details}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

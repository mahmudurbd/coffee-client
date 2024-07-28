import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import "./CoffeeProducts.scss";
import CoffeeCard from "../common/CoffeeCard";

const CoffeeProducts = ({ coffeeData, setCoffeeData }) => {
  console.log("from products", coffeeData);
  return (
    <div className="coffee-products-area" style={{ textAlign: "center" }}>
      <h2>Our Popular Products</h2>
      <Link to="/addCoffee">
        <Button className="custom-btn">Add Coffee</Button>
      </Link>
      <div className="background-image-left"></div>
      <div className="background-image-right"></div>
      <div className="coffee-products">
        {coffeeData.map((coffeeItem) => (
          <CoffeeCard
            key={coffeeItem._id}
            coffeeItem={coffeeItem}
            setCoffeeData={setCoffeeData}
            coffeeData={coffeeData}
          />
        ))}
      </div>
    </div>
  );
};

export default CoffeeProducts;

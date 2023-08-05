import React from "react";
import "./Product.css";

const Product = (props) => {
  const { id, img, seller, quantity, price } = props.product;
  return (
    <div className="product">
      <p>
        <img src={img} alt="" />
      </p>
      <p>{seller}</p>
      <p>{quantity}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;

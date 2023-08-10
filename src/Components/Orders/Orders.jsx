import React from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Orders = () => {
  const cart = useLoaderData();
  console.log(cart);
  return (
    <div className="shop-container">
      <div className="product-container">
        <h2>Your Orders :{cart.length}</h2>
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Orders;
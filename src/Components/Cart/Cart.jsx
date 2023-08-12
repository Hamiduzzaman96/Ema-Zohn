import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart, handleClearCart, children }) => {
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
  }
  // console.log(cart);
  const tax = (totalPrice * 7) / 100;
  const total = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Your Selected Items: {cart.length}</p>
      <p>Total Price: ${totalPrice}</p>
      <p>Total Shipping: ${totalShipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h4>Grand Total: ${total.toFixed(2)}</h4>
      <button onClick={handleClearCart} className="clear-cart">
        <span>Empty Cart</span>
        <FontAwesomeIcon icon={faTrashAlt} />
      </button>
      {children}
    </div>
  );
};

export default Cart;

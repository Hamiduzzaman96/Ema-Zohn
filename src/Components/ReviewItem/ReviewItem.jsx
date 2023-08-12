import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, handleRemoveFromCart }) => {
  const { id, img, price, name, quantity } = product;
  return (
    <div className="reviewItem-container">
      <img src={img} alt="" />
      <div className="review-info">
        <p className="product-title">{name}</p>
        <p>
          Price : <span className="orange-text">${price}</span>
        </p>
        <p>
          Quantity : <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button className="btn-delete" onClick={() => handleRemoveFromCart(id)}>
        <FontAwesomeIcon className="delete-btn" icon={faMinus} />
      </button>
    </div>
  );
};

export default ReviewItem;

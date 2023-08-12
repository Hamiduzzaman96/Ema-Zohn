import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProducts = products.find((product) => product.id === id);
      // console.log(savedProducts);
      if (addedProducts) {
        const quantity = storedCart[id];
        addedProducts.quantity = quantity;
        savedCart.push(addedProducts);
      }

      // console.log(addedProducts);
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
        ;
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/orders" className="link-to">
            <button className="review-button">
              Review Order <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;

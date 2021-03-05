import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../cart/Cart";
import Product from "../Product/Product";
import ReviewItems from "../ReviewItems/ReviewItems";
import { Link } from "react-router-dom";
import happyImage from "../../images/giphy.gif";

const Review = () => {
  // const temp = localStorage.getItem("selectedData");
  // const data = JSON.parse(temp);
  // console.log(data);
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };

  const removeProduct = (productKey) => {
    console.log(
      "removed clicked",
      fakeData.find((pd) => pd.key === productKey)
    );
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKey = Object.keys(saveCart);
    console.log(productKey);
    const cartProduct = productKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = saveCart[key];
      return product;
    });
    setCart(cartProduct);
  }, []);
  const thankYou = <img src={happyImage} alt="" />;
  console.log(cart);
  return (
    <div className="shop_container">
      <div className="product_container">
        {/* {data?.map((el, i) => (
        <Product product={el} key={i} showButton={false}></Product>
      ))} */}
        {orderPlaced && thankYou}
        review{cart.length}
        {cart.map((data) => (
          <ReviewItems data={data} removeProduct={removeProduct}></ReviewItems>
        ))}
      </div>
      <div className="cart_container">
        <Cart cart={cart}>
          <Link to="/review">
            <button onClick={handlePlaceOrder} className="product_btn">
              Place Order
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Review;

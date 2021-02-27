import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  console.log(props.cart);
  const totalPrice = cart.reduce((i, c) => i + c.price, 0);
  let shipingCost = 0;
  const tax = totalPrice * 0.1;
  if (totalPrice > 35) {
    shipingCost = 0;
  } else if (totalPrice > 15) {
    shipingCost = 4;
  } else if (totalPrice > 0) {
    shipingCost = 12;
  }
  //   console.log(totalPrice);
  return (
    <div>
      <h4>Order Summary</h4>
      <p>item ordered: {cart.length}</p>
      <p>Product price: {totalPrice}</p>
      <p>Total price: {totalPrice + shipingCost + tax}</p>
      <p>Shiping cost: {shipingCost}</p>
      <p>Tax: {tax}</p>
    </div>
  );
};

export default Cart;

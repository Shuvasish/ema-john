import React from "react";

const ReviewItems = (props) => {
  const { key, name, quantity, price } = props.data;
  const { removeProduct } = props;
  console.log(name);
  return (
    <div>
      <h4>{name}</h4>
      <h4>${price}</h4>
      <h6>{quantity}</h6>
      <button onClick={() => removeProduct(key)}>remove</button>
    </div>
  );
};

export default ReviewItems;

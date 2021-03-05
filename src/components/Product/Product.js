import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props.product.key);
  const { img, name, price, key, src, seller, stock } = props.product;
  return (
    <div className="product">
      <div className="product_img">
        <img src={img} alt="" />
      </div>
      <div className="">
        <h4 className="product_name">
          <Link to={`/product/${key}`}>{name}</Link>
        </h4>
        <br />
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in the stock - order soon</small>
        </p>
        {props.showButton && (
          <button
            className="product_btn"
            onClick={() => props.handleAddProduct(props.product)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> add to cart
          </button>
        )}
      </div>
    </div>
    // <div className="product_container">
    //   <div className="product">
    //     <div className="product_left">
    //       <img src={product.img} alt="" />
    //     </div>
    //     <div className="product_right">
    //       <div className="right_top">
    //         <h3>{product.name}</h3>
    //       </div>
    //       <div className="right_bottom">
    //         <div className="right_bottom-left">left</div>
    //         <div className="right_bottom-right">right</div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* <li>{product.name}</li>
    //     <li>${product.price}</li>
    //     <img src={product.img} alt="" /> */}
    // </div>
  );
};

export default Product;

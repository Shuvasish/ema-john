import React, { useState, useEffect } from "react";
import fakeData from "../../../fakeData";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../../utilities/databaseManager";
import Cart from "../../cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  // console.log(fakeData);
  const fakeData10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(fakeData10);
  const [cart, setCart] = useState([]);

  //
  // useEffect(() => {
  //   const a = localStorage.getItem("emaJohn/carts/user-1614926311838");
  //   const b = JSON.parse(a);
  //   const c = Object.keys(b);
  //   const d = c.map((p) => fakeData.find((pp) => pp.key === p));
  //   d.map((p) => (p.quantity = 1));
  //   setCart([...cart, ...d]);
  //   // debugger;
  //   console.log(d);
  //   console.log(cart);
  // }, []);
  //

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const previousCart = productKeys.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = savedCart[existingKey];
      return product;
    });
    setCart(previousCart);
  }, []);

  const handleAddProduct = (product) => {
    const pdToAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === pdToAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const other = cart.filter((pd) => pd.key !== pdToAdded);
      newCart = [...other, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    // console.log("added product", product);
    // const newCart = [...cart, product];
    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };
  // localStorage.setItem("selectedData", JSON.stringify(cart));
  return (
    <div>
      <div className="shop_container">
        <div className="product_container">
          {products.map((product) => (
            <Product
              product={product}
              showButton={true}
              handleAddProduct={handleAddProduct}
            ></Product>
          ))}
        </div>
        <div className="cart_container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="product_btn">Review Order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;

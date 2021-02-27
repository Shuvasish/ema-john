import React, { useState } from "react";
import fakeData from "../../../fakeData";
import Cart from "../../cart/Cart";
import Product from "../../Product/Product";
import "./Shop.css";

const Shop = () => {
  console.log(fakeData);
  const fakeData10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(fakeData10);
  const [cart, setCart] = useState([]);

  const handleAddProduct = (product) => {
    console.log("added product", product);
    const newCart = [...cart, product];
    setCart(newCart);
  };
  return (
    <div>
      <div className="shop_container">
        <div className="product_container">
          {products.map((product) => (
            <Product
              product={product}
              handleAddProduct={handleAddProduct}
            ></Product>
          ))}
        </div>
        <div className="cart_container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;

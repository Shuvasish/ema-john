import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { productKey } = useParams();
  const product = fakeData.find((pd) => pd.key === productKey);
  const {
    category,
    name,
    img,
    price,
    shipping,
    star,
    starCount,
    stock,
  } = product;
  console.log(product);
  return <Product showButton={false} product={product}></Product>;
};

export default ProductDetails;

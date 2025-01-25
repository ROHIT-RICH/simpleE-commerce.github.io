import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/product";
// import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail-main">
      <div className="product-detail">
        <h1>{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          width={"400px"}
          height={"400px"}
        />
        <p>{product.description}</p>
        <p>Price: Rs {product.price}/-</p>
      </div>
    </div>
  );
};

export default ProductDetail;

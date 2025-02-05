import React from "react";
import "../../styles.css";
const ProductImage = ({ product }) => {
  return (
    <div className="product-image-container">
      <img className="product-image" src={product.image} alt={product.title} />
    </div>
  );
};

export default ProductImage;

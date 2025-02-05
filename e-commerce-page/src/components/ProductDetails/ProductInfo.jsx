import { useState } from "react";
import "../../styles.css";
import AddToCarButton from "../ProductDetails/AddToCartButton";
import StarReting from "./StarReting";
const ProductInfo = ({ product, shoppingCart, setShoppingCart }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <section className="product-price-review">
          <section className="product-price">
            <p className="current-price">Price: ${product.price}</p>
            <p className="original-price">
              Price: ${(product.price * 1.15).toFixed(2)}
            </p>
          </section>
          <section className="review-section">
            <StarReting rating={product.rating.rate} />
            <p>{product.rating.count} Review</p>
          </section>
        </section>

        <section className="quantity-controls">
          <button
            className="quantity-button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <p>{quantity}</p>
          <button
            className="quantity-button"
            onClick={() => setQuantity(Math.min(10, quantity + 1))}
          >
            +
          </button>
        </section>

        <AddToCarButton
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
          product={product}
          quantity={quantity}
        />
      </div>
    </>
  );
};
export default ProductInfo;

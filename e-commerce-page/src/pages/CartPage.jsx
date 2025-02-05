import React from "react";
import Header from "../components/Header";
import CartItems from "../components/Cart/CartItems";
import CartSummary from "../components/Cart/CartSummary";
const CartPage = ({ shoppingCart, setShoppingCart }) => {
  return (
    <>
      <Header />
      {!shoppingCart.length ? (
        <p className="empty-cart-message">
          Your cart is currently empty. Please add some products to see them
          here.
        </p>
      ) : (
        <div className="cart-page-container">
          <CartItems
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
          <CartSummary shoppingCart={shoppingCart} />
        </div>
      )}
    </>
  );
};
export default CartPage;

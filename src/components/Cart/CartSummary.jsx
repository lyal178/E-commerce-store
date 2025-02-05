import React from "react";
const CartSummary = ({ shoppingCart }) => {
  const total = shoppingCart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <p>Subtotal: ${total.toFixed(2)}</p>
      <p>Tax (20%): ${((total / 100) * 20).toFixed(2)}</p>
      <b>
        <p>Total: ${(total + (total / 100) * 20).toFixed(2)}</p>
      </b>
    </div>
  );
};

export default CartSummary;

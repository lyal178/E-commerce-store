const CartItems = ({ shoppingCart, setShoppingCart }) => {
  const handleRemoveFromCart = (item) => {
    setShoppingCart(
      shoppingCart.filter((shoppingCartItem) => shoppingCartItem.id !== item.id)
    );
  };
  const updateQuantity = (item, newQuantity) => {
    if (newQuantity < 0) return;
    newQuantity = Math.min(newQuantity, 10);
    const updatedShopingCart = shoppingCart.map((shoppingCartItem) =>
      shoppingCartItem.id === item.id
        ? { ...shoppingCartItem, quantity: newQuantity }
        : shoppingCartItem
    );
    if (newQuantity === 0) {
      handleRemoveFromCart(item);
    } else {
      setShoppingCart(updatedShopingCart);
    }
  };

  return (
    <div className="cart-items">
      {shoppingCart.map((item) => (
          <div className="cart-product-info">
            <div key={item.id} className="cart-item">
          <img
            className="cart-product-image"
            src={item.image}
            alt={item.title}
          />
            <h2 className="cart-product-title">{item.title}</h2>
            <p className="cart-product-price">Price: ${item.price}</p>

            <section className="quantity-controls">
              <button
                className="quantity-button"
                onClick={() => updateQuantity(item, item.quantity - 1)}
              >
                -
              </button>
              <p className="quantity-display">{item.quantity}</p>
              <button
                className="quantity-button"
                onClick={() => updateQuantity(item, item.quantity + 1)}
              >
                +
              </button>
            </section>
            <button className="remove-button" onClick={() => handleRemoveFromCart(item)}>
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;

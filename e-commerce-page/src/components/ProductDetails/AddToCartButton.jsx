import { useEffect, useState } from "react";
import "../../styles.css";
const AddToCartButton = ({
  product,
  shoppingCart,
  setShoppingCart,
  quantity,
}) => {
  const [showNotification, setShowNotification] = useState({
    message: "",
    show: false,
  });

  useEffect(() => {
    let timer;
    if (showNotification.show) {
      timer = setTimeout(
        () => setShowNotification({ message: "", show: false }),
        1500
      );
    }
    return () => timer && clearTimeout(timer);
  }, [showNotification.show]);

  const HandleAddToCart = (product) => {
    const existingItem = shoppingCart.find(
      (item) => item.id === Number(product.id)
    );
    if (existingItem) {
      if (quantity + existingItem.quantity > 10) {
        setShowNotification({
          message: "You can't add more than 10 items to your cart",
          show: true,
        });
      } else {
        setShoppingCart(
          shoppingCart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        );
        setShowNotification({
          message: "Item added to cart",
          show: true,
        });
      }
    } else {
      setShoppingCart([...shoppingCart, { ...product, quantity: quantity }]);
      setShowNotification({
        message: "Item added to cart",
        show: true,
      });
    }
  };

  return (
    <div>
      <button
        className="add-to-cart-button"
        onClick={() => HandleAddToCart(product)}
        disabled={showNotification.show}
      >
        {showNotification.show ? showNotification.message : "Add to Cart"}
      </button>
    </div>
  );
};

export default AddToCartButton;

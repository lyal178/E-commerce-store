import { useEffect, useState } from "react";
import { getProducts } from "./services/api";
import { Routes, Route } from "react-router-dom";
import CartPage from "../src/pages/CartPage";
import ProductPage from "../src/pages/ProductPage";
import HomePage from "../src/pages/HomePage";

function App() {
  const [productList, setProductList] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchProductList() {
      try {
        const productListResponse = await getProducts();
        setProductList(productListResponse);
        setIsError(false);
      } catch (error) {
        setIsError(true);
        setProductList([]);
      }
    }
    fetchProductList();
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<HomePage products={productList} isError={isError} />}
      />
      <Route
        path="/product/:id"
        element={
          <ProductPage
            products={productList}
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        }
      />
      <Route
        path="/cart"
        element={
          <CartPage
            shoppingCart={shoppingCart}
            setShoppingCart={setShoppingCart}
          />
        }
      />
    </Routes>
  );
}

export default App;

import Header from "../components/Header";
import ProductImage from "../components/ProductDetails/ProductImage";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import { useParams } from "react-router-dom";
const ProductPage = ({ products, shoppingCart, setShoppingCart }) => {
  const { id: productId } = useParams();
  const selectedProduct = products.find(
    (product) => product.id === Number(productId)
  );

  return (
    <>
      <Header />
      <div className="product-page">
        <ProductImage product={selectedProduct} />
        <ProductInfo
          product={selectedProduct}
          shoppingCart={shoppingCart}
          setShoppingCart={setShoppingCart}
        />
      </div>
    </>
  );
};
export default ProductPage;

import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

const HomePage = ({ products, error }) => {
  return (
    <div className="home-page">
      <Header />
      {!error && (
        <div className="products-grid">
          {products.map((product) => (
            <div className="products" key={product.id}>
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                style={{ textDecoration: "none" }}
              >
                <img src={product.image} alt={product.title} />
                <div className="products-info">
                  <h2>{product.title}</h2>
                  <p>Price: ${product.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;

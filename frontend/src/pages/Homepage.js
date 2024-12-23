// Location: ecommerce-site/frontend/src/pages/HomePage.js
// Purpose: Home page displaying all products

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="home-page">
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;

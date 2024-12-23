// Location: ecommerce-site/frontend/src/pages/ProductPage.js
// Purpose: Product details page

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/api/products/${id}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;

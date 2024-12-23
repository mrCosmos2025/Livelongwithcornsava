// Location: ecommerce-site/frontend/src/components/Navbar.js
// Purpose: Navigation bar component

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Healthy African Foods
        </Link>
        <div className="navbar-menu">
          <Link to="/" className="navbar-item">
            Home
          </Link>
          <Link to="/checkout" className="navbar-item">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

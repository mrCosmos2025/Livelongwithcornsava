// Location: ecommerce-site/frontend/src/App.js
// Purpose: Main App component

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </Router>
  );
}

export default App;

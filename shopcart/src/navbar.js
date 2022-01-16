import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import Cart from "./Cart";
// import React, { useEffect } from 'react';


export function Nav(props) {
  return (
    <div>
      <Router>
        {/* Navigation */}
        <div className="App-header d-flex flex-row align-items-center justify-content-between">
          <Link to="/">
            <h1 style={{ display: "inline", color: "white", textDecoration:"none" }}> Shop 2 React</h1>
          </Link>
          <div style={{ display: "inline", fontSize: "12pt" }}>
            <Link to="/Cart">
              <FontAwesomeIcon style={{ marginRight: "10px", color: "white"}} icon={faShoppingCart} />
            </Link>
            <CartItemTotal items={props.items} /> items
          </div>
        </div>
        {/* Routes */}
        <Routes>
          <Route
            path="/Cart"
            element={<Cart />}
          />
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
      </Router >
    </div >

  );
}

function CartItemTotal(props) {
  
  let total = props.items.map((item) => {
    return item.cartQty;
  }).reduce((sum, item) => {
    return sum + item;
  });

  return total
  }

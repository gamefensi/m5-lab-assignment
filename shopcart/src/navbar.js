import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { faShoppingCart, faRegistered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cart from "./Cart";
import CheckOut from "./Checkout"
import { DisplayProducts } from "./displayProducts";



export function Nav(props) {
  return (
    <div>
      <Router>
        {/* Navigation */}
        <div className="App-header d-flex flex-row align-items-center justify-content-between">
          <Link to="/">
            <h1 style={{ display: "inline", color: "white", textDecoration: "none" }}>
              <span className="px-2">Shop 2</span>
              <FontAwesomeIcon icon={faRegistered} className="fas fa-lg text-white" />
              eact
            </h1>
          </Link>
          <div style={{ display: "inline", fontSize: "12pt" }}>
            <Link to="/Cart">
              <FontAwesomeIcon style={{ marginRight: "10px", color: "white" }} icon={faShoppingCart} />
            </Link>
            {props.cartItemTotal()} items
          </div>
        </div>

        {/* Routes */}
        <Routes>
          <Route
            path="/Cart"
            element={<Cart
              cartItemTotal={props.cartItemTotal}
              items={props.items}
            />}
          />
          <Route
            path="/Checkout"
            element={<CheckOut />}
          />
          <Route
            path="/"
            element={
              <DisplayProducts
                items={props.items}
                cart={props.items.cart}
                handleAddToCart={props.handleAddToCart}
                handleSubFromCart={props.handleSubFromCart}
              />}
          />
        </Routes>
      </Router >
    </div >

  );
}


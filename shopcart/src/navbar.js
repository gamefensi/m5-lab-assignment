import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { faHome, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import Cart from "./Cart";
// import logo from './logo.svg';

export function Nav(props) {
  return (
    <div>
      <Router>
        {/* Navigation */}
        <div className="App-header d-flex flex-row align-items-center justify-content-between">
          <Link to="/">
            <h1 style={{ display: "inline" }}> Shop 2 React</h1>
          </Link>
          <div style={{ display: "inline", fontSize: "12pt" }}>
            <Link to="/Cart">
              <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faShoppingCart} />
            </Link>
            0 items
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
            element={<Home items={props.items} />}
          />
        </Routes>
      </Router >
    </div >

  );
}


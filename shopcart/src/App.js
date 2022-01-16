import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inventory } from "./products";
import { Nav } from './navbar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: Inventory
    }
  }




  render() {
    // let list = <DisplayProducts items={this.state.Products.Stock} />
    return (
      <div className="App">
        <Nav 
          items={this.state.Products.Stock}
          cart={this.state.Products.cart}
          // handleAddToCart = {this.handleAddToCart}
        />

      </div>
    )
  }
}



export default App;

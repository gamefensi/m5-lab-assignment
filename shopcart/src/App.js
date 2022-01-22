import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inventory } from "./products";
import { Nav } from './navbar';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: Inventory,
      myCart: Inventory.cart,
    }
  }

  cartItemTotal = () => {
    let items = this.state.Products.Stock
    let total = items.map((item) => {
      return item.cartQty;
    }).reduce((sum, item) => {
      return sum + item;
    });

    return total
  }

  handleAddToCart = (getItem, currentItems) => {
    if (getItem.qty > 0) {
      const newQty = getItem.qty--;
      const newCartQty = getItem.cartQty++;
      this.setState({ qty: newQty, cartQty: newCartQty });
      currentItems.push(getItem);
      console.log(currentItems);
      console.log(currentItems.getItem)
    }
  }

  handleSubFromCart = (getItem, currentItems) => {
    const index = currentItems.indexOf(getItem)
    if (index > -1) {
      const newQty = getItem.qty++;
      currentItems.splice(index, 1);
      this.setState({ qty: newQty })
    }
    console.log(currentItems);
  }

  render() {

    return (
      <div className="App">
        <Nav
          items={this.state.Products}
          cartItemTotal={this.cartItemTotal}
          handleAddToCart={this.handleAddToCart}
          handleSubFromCart={this.handleSubFromCart}
        />
        {/* <div>
          {list}
          <div className='m-5'>
            <h3>Total Quantity: {this.handleSumItems()}</h3>

          </div>
        </div> */}
      </div>
    )
  }
}

// function displayStoreFront(props){

// }

export default App;

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
      ProductList: Inventory.Stock
      // sortType: "asc",
      // listNum: "",
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
    } else {
      alert("No more items in stock!")
    }
  }

  handleSubFromCart = (getItem, currentItems) => {
    const index = currentItems.indexOf(getItem)
    if (index > -1) {
      const newQty = getItem.qty++;
      const newCartQty = getItem.cartQty--;
      currentItems.splice(index, 1);
      this.setState({ qty: newQty, cartQty: newCartQty })
    }
    console.log(currentItems);
  }

  onSort = (items, sortType) => {
    console.log(items);
    console.log(sortType);
    switch (sortType) {
      case 'lowest':
        items.sort(function (a, b) {
          return a.value - b.value
        });
        break;
      case 'highest':
        items.sort(function (a, b) {
          return b.value - a.value
        });
        break;
      default:
        items.sort(function (a, b) {
          return a.id - b.id;
        });
    }
    this.setState({ ProductList: items })
  }
  render() {

    return (
      <div className="App">
        <Nav
          items={this.state.Products}
          cartItemTotal={this.cartItemTotal}
          handleAddToCart={this.handleAddToCart}
          handleSubFromCart={this.handleSubFromCart}
          sortType={this.state.sortType}
          listNum={this.state.listNum}
          onSort={this.onSort}
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

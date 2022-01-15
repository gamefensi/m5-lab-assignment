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

	handleAddToCart = () => {
	}

	handleSubFromCart = () => {

	}


  render() {
    // let list = <DisplayProducts items={this.state.Products.Stock} />
    return (
      <div className="App">
        {/* <div className="App-header d-flex flex-row align-items-center justify-content-between">
          <h1 style={{display:"inline"}}> Shop to React</h1>
          <div style={{display:"inline", fontSize: "12pt"}}>
            <FontAwesomeIcon style={{marginRight:"10px"}} icon={faShoppingCart} />
            0 items
          </div>
        </div>
        {list}
        <div className='m-5'>
        <h3>Total Quantity: </h3>
        <button onClick={this.sumItems} className='btn-primary'>Get total items in stock </button>
        <div className="d-inline-flex my-3 mx-4" id="total" />
        </div> */}
        <Nav items={this.state.Products.Stock} />

      </div>
    )
  }
}



export default App;

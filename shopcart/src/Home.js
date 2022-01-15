import React, { Component } from "react";
import { Inventory } from "./products";
import { DisplayProducts } from "./displayProducts";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Products: Inventory
		}
	}
	handleSumItems = () => {
		// let items = this.state.Products
		let total = this.state.Products.map((item) => {
			return item.qty;
		}).reduce((sum, item) => {
			return sum + item;
		});

    if (total === 0) {
      return (
        document.getElementById("total").innerHTML = "<span style='color: red'> No items left in stock </span>"
      )
    } else 
    return (
      document.getElementById("total").innerHTML = total + " items left in stock"
    )
  }

	render() {
		let list = <DisplayProducts items={this.state.Products.Stock} />
		return (
			<div>
				{list}
				<div className='m-5'>
					<h3>Total Quantity: </h3>
					<button onClick={this.handleSumItems} className='btn-primary'>Get total items in stock </button>
					<div className="d-inline-flex my-3 mx-4" id="total" />
				</div>
			</div>
		)
	}
}



export default Home;

import React, { Component } from "react";
import { Inventory } from "./products";
import { DisplayProducts } from "./displayProducts";
import "bootstrap/dist/css/bootstrap.min.css";

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Products: Inventory,
			myCart: Inventory.cart
		}
	}
	handleSumItems = () => {
		let total = this.state.Products.Stock.map((item) => {
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
	handleAddToCart = (getItem, currentItems) => {
		if (getItem.qty > 0) {
			const newQty = getItem.qty--;
			currentItems.push(getItem);
			this.setState({ qty: newQty });
			console.log(currentItems);
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
		let list = <DisplayProducts
			items={this.state.Products.Stock}
			cart={this.state.myCart}
			handleAddToCart={this.handleAddToCart}
			handleSubFromCart={this.handleSubFromCart}
		/>
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

import React, { Component, useState } from "react";
import { Inventory } from "./products";
import { DisplayProducts } from "./displayProducts";
import "bootstrap/dist/css/bootstrap.min.css";
import { Example } from './toasts';



class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Products: Inventory,
			myCart: Inventory.cart,
			renderAddToast: false,
			renderRemoveToast: false
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
			const newCartQty = getItem.cartQty++;
			this.setState({ qty: newQty, cartQty: newCartQty });
			currentItems.push(getItem);
			this.setState({renderAddToast: !this.state.renderAddToast})
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
		let list = <DisplayProducts
			items={this.state.Products.Stock}
			cart={this.state.myCart}
			// renderAddToast={this.state.renderAddToast}
			// renderRemoveToast={this.state.renderAddToast}
			handleAddToCart={this.handleAddToCart}
			handleSubFromCart={this.handleSubFromCart}
		/>
		return (
			<div>
				{this.state.renderAddToast && <Example />}
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

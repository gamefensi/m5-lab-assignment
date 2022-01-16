import { Component } from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Inventory } from "./products";
import { Link } from "react-router-dom";


class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myCart: Inventory.cart
		}
	}
	render() {

		return (

			<div>
				<div id="cartStatus" className="my-3">
				{this.state.myCart.length === 0 ? (
					<h1 className="display-3">Cart is empty!</h1>
				) : (<h1 className="display-3">Items for Checkout: </h1>)}
				</div>
				<DisplayCart
					myCart={this.state.myCart}
				/>
			</div>
		)
	}
}

function DisplayCart(props) {
	const isEmpty = props.myCart.length === 0;
	const cart = props.myCart;
	const [show, setShow] = useState(false);
	const [showImge, setShowImge] = useState({});
	const handleClose = () => setShow(false);
	const handleShow = (product) => {
		setShow(true);
		setShowImge(product);
	}
	let unique = [...new Set(cart)]
	if (!isEmpty) {
		return (
			<div>
				<ListGroup>
					{unique.map((item) => (
						<ListGroupItem style={{ padding: "10px, 0, 10px, 50px", display: "block", }} key={item.id} tag="a">
							<div>
								<h4>{item.desc}</h4>
							</div>
							<img onClick={() => handleShow(item)} style={{ margin: "0 20px", width: "150px", objectFit: "cover" }} className="img-fluid" src={item.image} alt={item.desc} />
							<div>
								{item.cartQty} items in cart
							</div>
						</ListGroupItem>
					))}
				</ListGroup>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{showImge.desc}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img
							src={showImge.image}
							width="350"
							alt={showImge.desc}
							className="mx-5"
						/>
						<p><span className="text-dark">Ratings:</span> {showImge.ratings}/5</p>
					</Modal.Body>
				</Modal>
			</div>
		)
	} else {
		return (
			<div>
				<img src="./mini-empty-cart.png" className="img-fluid"></img>
				<h3 className="text-muted"> There are no items in your cart. </h3>
				<Link to="/">
				<button
					id="backToHome"
					href="/"
					className="btn btn-dark"
				>
					Back to Store
				</button>
				</Link>

			</div>
		)
	}
}

export default Cart;
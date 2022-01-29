import { ListGroup, ListGroupItem } from 'reactstrap';
import { useState } from "react";
import { Modal } from 'react-bootstrap';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true);
        setShowImge(product);
    }
    const cart = props.cart;

    const handleSumItems = () => {
        let total = props.items.Stock.map((item) => {
            return item.qty;
        }).reduce((sum, item) => {
            return sum + item;
        });

        if (total === 0) {
            return <span style={{ color: 'red' }}> No items left in stock </span>
        } else {
            return total + " items left in stock"
        }
    }

    return (
        <div>
            <div className="my-5 d-flex justify-content-center align-items-start">
                <p style={{ display: "inline", marginRight: "10px" }}>Sort Price By: </p>
                <select
                    className="align-top"
                    onChange={(e) => props.onSort(props.items.Stock, e.target.value)}
                    name="sorter"
                    id="sorter">
                    <option value="normal">Normal</option>
                    <option value="lowest">Lowest</option>
                    <option value="highest">Highest</option>
                </select>
            </div>
            <ListGroup>
                {props.items.Stock.map((item) => (
                    <ListGroupItem style={{ display: "block" }} key={item.id}>
                        <div className="row" style={{ padding: "10px 0 10px 50px" }}>
                            <div>
                                {item.desc}
                                <span
                                    style={{
                                        color: "red",
                                        marginLeft: "10px",
                                        fontWeight: "bold"
                                    }}
                                >
                                    ${item.value}
                                </span>
                            </div>
                            <img onClick={() => handleShow(item)} style={{ margin: "10px 50px 10px 0", width: "150px", objectFit: "cover" }} className="img-fluid" src={item.image} alt={item.desc} />
                            <div className="addSubBtns col-2 align-items-center d-flex ">
                                <button
                                    id="minusBtn"
                                    type="button"
                                    className="btn btn-light border"
                                    style={{ marginRight: "10px" }}
                                    onClick={() => props.handleSubFromCart(item, cart)}
                                >
                                    <FontAwesomeIcon
                                        icon={faMinus}
                                        className="fas fa-sm"
                                    />
                                </button>

                                <button
                                    id="addBtn"
                                    type="button"
                                    className="btn btn-light border"
                                    onClick={() => props.handleAddToCart(item, cart)}
                                >
                                    <FontAwesomeIcon
                                        icon={faPlus}
                                        className="fas fa-sm"
                                    />
                                </button>
                            </div>
                            <div style={{ display: "inline" }} className="col">
                                <p style={{ marginRight: "10px", width: "200px" }}>Quantity:</p>
                                <input style={{ marginRight: "10px", width: "50px", height: "50px", textAlign: "center" }} value={item.cartQty} disabled />
                            </div>
                            {/* add/sub from cart */}
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
            <div className='m-5'>
                <h3>Total Quantity: {handleSumItems()}</h3>
            </div>
        </div>
    )
}







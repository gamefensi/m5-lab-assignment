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
    return (
        <div>
            <ListGroup>
                {props.items.map((item) => (
                    <ListGroupItem style={{ display: "block", padding: "10px" }} key={item.id} tag="a">
                        <div className="row">
                        <div style={{ marginLeft: "50px" }}>
                            {item.desc}
                        </div>
                        <img onClick={() => handleShow(item)} style={{ margin: "10px 50px 0 50px", width: "150px", objectFit: "cover" }} className="img-fluid" src={item.image} alt={item.desc} />
                        <div style={{display: "inline"}} className="col-2">
                            <p style={{ marginRight: "10px", width: "200px"}}>In Stock:</p>
                            <input style={{ marginRight: "10px", width: "50px", height: "50px", textAlign: "center" }} value={item.qty} disabled />
                        </div>
                        </div>


                        {/* add/sub from cart */}
                        <div className="addSubBtns">
                            <p>Add or Remove from cart: </p> 
                            <button
                                id="minusBtn"
                                type="button"
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
                                style={{ marginRight: "10px" }}
                                onClick={() => props.handleAddToCart(item, cart)}
                            >
                                <FontAwesomeIcon
                                    icon={faPlus}
                                    className="fas fa-sm"
                                />
                            </button>

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
}


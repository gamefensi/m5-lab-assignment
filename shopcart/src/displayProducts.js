import { ListGroup, ListGroupItem } from 'reactstrap';
import { useState } from "react";
import { Modal } from 'react-bootstrap';

export function DisplayProducts(props) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (product) => { 
        setShow(true);
        setShowImge(product);
    }
    return (
        <div>
        <ListGroup>
            {props.items.map((item) => (
                <ListGroupItem style={{ display: "block", padding: "10px" }} key={item.id} tag="a" href="#">
                    <div style={{ marginLeft: "50px" }}>
                        {item.desc}
                    </div>
                    <img onClick={() => handleShow(item)} style={{ margin: "10px 50px 0 50px", width: "150px", objectFit: "cover" }} className="img-fluid" src={item.image} alt={item.desc} />
                    <input style={{ marginRight: "10px", padding: "5px", width: "30px", textAlign: "center" }} placeholder={item.qty} disabled />
                    quantity
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


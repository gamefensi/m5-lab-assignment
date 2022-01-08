import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { ListGroup, ListGroupItem } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ShoppingItems: [
        {
          id: 1,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          value: 0,
          qty: 1
        },
        {
          id: 2,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          value: 0,
          qty: 1
        },
        {
          id: 3,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          value: 0,
          qty: 1
        },
        {
          id: 4,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          value: 0,
          qty: 1
        },
      ]
    }
  }

  sumItems = () => {
    // let items = this.state.ShoppingItems
    let total = this.state.ShoppingItems.map((item) => {
      return item.qty;
    }).reduce((sum, item) => {
      return sum + item;
    });

    if (total == 0) {
      return (
        document.getElementById("total").innerHTML = "<span style='color: red'> No items left in stock </span>"
      )
    } else 
    return (
      document.getElementById("total").innerHTML = total + " items left in stock"
    )
  }

  render() {
    let list = <ShoppingList items={this.state.ShoppingItems} />
    return (
      <div className="App">
        <div className="App-header d-flex flex-row align-items-center justify-content-between">
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
        </div>


      </div>
    )
  }
}

function ShoppingList(props) {
  return (
    <ListGroup>
      {props.items.map((item) => (
        <ListGroupItem style={{display: "block", padding: "10px"}}key={item.id} tag="a" href="#">
            <div style={{marginLeft: "50px"}}>
              {item.desc}
              </div>
          <img style={{margin: "10px 50px 0 50px", width: "150px", objectFit: "cover" }} className="img-fluid" src={item.image} alt={item.desc} />
          <input style={{marginRight: "10px", padding:"5px", width: "30px", textAlign: "center"}} placeholder={item.qty} disabled/>
          quantity
        </ListGroupItem>
        
      ))}
      </ListGroup>
  )
}


export default App;

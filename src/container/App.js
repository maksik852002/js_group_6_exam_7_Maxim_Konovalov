import React, {Component} from 'react';
import './App.css';
import './bootstrap.min.css';

const GOODS = [
  {name: 'Hamburger', price:80, image: <GiLindenLeaf/>},
  {name: 'Cheeseburger', price:90, image: <GiCheeseWedge/>},
  {name: 'Fries', price:45, image: <GiMeat/>},
  {name: 'Coffe', price:70, image: <FaBacon/>},
  {name: 'Tea', price:50, image: <FaBacon/>},
  {name: 'Cola', price:40, image: <FaBacon/>},
];

class App extends Component {
  state = { 
    goods: [
 
    ],
   
  };

  render = () => (
    <div className="container">
      <div className="row mt-3 text-center">
        <div className="col-12 col-md-6 mb-3">
          <h5>Order Details:</h5>
          <div className="border border-secondary rounded p-2">
          </div>
        </div>
        <div className="col-12 col-md-6 mb-3">
          <h5>Add items:</h5>
          <div className="border border-secondary rounded p-2"> 
          </div>
        </div>
      </div>  
    </div>
  )
};

export default App;

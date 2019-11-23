import React, {Component} from 'react';
import './App.css';
import '../bootstrap.min.css';
import Goods from '../components/Goods/Goods'

import { FaHamburger } from 'react-icons/fa';
import { GiHamburger } from 'react-icons/gi';
import { GiPotato } from 'react-icons/gi';
import { DiCoffeescript } from 'react-icons/di';
import { FaCoffee } from 'react-icons/fa';
import { MdLocalDrink } from 'react-icons/md';

const GOODS = [
  {name: 'Hamburger', price:80, image: <FaHamburger/>},
  {name: 'Cheeseburger', price:90, image: <GiHamburger/>},
  {name: 'Fries', price:45, image: <GiPotato/>},
  {name: 'Coffe', price:70, image: <DiCoffeescript/>},
  {name: 'Tea', price:50, image: <FaCoffee/>},
  {name: 'Cola', price:40, image: <MdLocalDrink/>},
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
            {
              GOODS.map((good, i) => (
                <Goods
                key = {i}
                name = {good.name}
                price = {good.price}
                image = {good.image}
                />
              ))
            }
          </div>
        </div>
      </div>  
    </div>
  )
};

export default App;

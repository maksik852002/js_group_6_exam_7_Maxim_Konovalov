import React, {Component} from 'react';
import './App.css';
import '../bootstrap.min.css';
import Goods from '../components/Goods/Goods'
import Order from '../components/Order/Order'

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
      {name: 'Hamburger', price:80, count: 0, total:0, id: 'gd1'},
      {name: 'Cheeseburger', price:90, count: 0, total:0, id: 'gd2'},
      {name: 'Fries', price:45, count: 0, total:0, id: 'gd3'},
      {name: 'Coffe', price:70, count: 0, total:0, id: 'gd4'},
      {name: 'Tea', price:50, count: 0, total:0, id: 'gd5'},
      {name: 'Cola', price:40, count: 0, total:0, id: 'gd6'},
    ],
    totalPrice: 0,
  };

  addGood = (id) => {
    const index = this.state.goods.findIndex(p=> p.id === id);
    const goods = [...this.state.goods]
    let totalPrice = this.state.totalPrice;
    let total = 0;
    goods[index].count++;
    goods[index].total = goods[index].count * goods[index].price    
    this.state.goods.forEach(element => {
      total += element.total
     })
     totalPrice=total
    this.setState({goods, totalPrice})
  }

  removeGood = (id) => {
    const index = this.state.goods.findIndex(p=> p.id === id);
    const goods = [...this.state.goods]
    let totalPrice = this.state.totalPrice;
    let total = 0;
    goods[index].count--;
    goods[index].total = goods[index].count * goods[index].price    
    this.state.goods.forEach(element => {
      total += element.total
     })
     totalPrice=total
    this.setState({goods, totalPrice})
  }

  render = () => {
    let id = [];
    return (
      <div className="container">
        <div className="row mt-3 text-center">
          <div className="col-12 col-md-6 mb-3">
            <h5>Order Details:</h5>
            <div className="border border-secondary rounded p-2">
              {
                this.state.goods.map(good => {
                  id.push(good.id) 
                  return (
                    good.count > 0 && <Order
                      key={good.id}
                      name = {good.name}
                      price = {good.price} 
                      count = {good.count}
                      goods = {this.state.goods}
                      remove = {()=> this.removeGood(good.id)}
                    />
                  )
                })
              }
              <p>Total price: {this.state.totalPrice}</p>
            </div>
          </div>
          <div className="col-12 col-md-6 mb-3">
            <h5>Add items:</h5>
            <div className="border border-secondary rounded p-2"> 
              {
                GOODS.map((good, i) => (
                  <Goods
                  key = {id[i]}
                  name = {good.name}
                  price = {good.price}
                  image = {good.image}
                  click= {()=> this.addGood(id[i])}
                  />
                ))
              }
            </div>
          </div>
        </div>  
      </div>
    )
  }
};

export default App;

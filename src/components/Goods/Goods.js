import React from 'react';
import './Goods.css';

const Goods = props => (
  <div
    onClick={props.click}
    className="d-flex border border-dark rounded flex-wrap my-2 align-items-center click"
  >
    <div className="col-4 imgs">{props.image}</div>
    <div className="col-8">
      <h6>{props.name}</h6>
      <p className="m-0">Price: {props.price} kgs </p>
    </div>
  </div>
);

export default Goods
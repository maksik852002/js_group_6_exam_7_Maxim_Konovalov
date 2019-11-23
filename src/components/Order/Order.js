import React from 'react';

const Order = props => (
    <div className="d-flex my-2 align-items-center">
      <div className="col-5">
        <p>{props.name}</p>
      </div>
      <div className="col-5">
        <p className="d-inline mr-4">x {props.count}</p>
        <p className='m-0 d-inline'>{props.price} kgs </p>
      </div>
      <div className="col-2"><button onClick={props.remove} className="close">x</button></div>
    </div>
  )

export default Order
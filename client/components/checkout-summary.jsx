import React from 'react';

export default function ListCartItems(props) {
  return (
    <div className="mt-3 mb-3"><hr/>
      <div className="row align-items-center mt-1 mb-1"><img src={props.cartItem.image} alt={props.cartItem.name} className="col-sm-5 mx-auto"/>
        <div className="col-sm-7">
          <div className="h6 card-font">{props.cartItem.name}</div>
          <div className="h6 description-font text-muted">${(props.cartItem.price / 100).toFixed(2)}</div>
          <div className="h6">Quantity: {props.cartItem.count}</div>
        </div>
      </div>
    </div>
  );
}

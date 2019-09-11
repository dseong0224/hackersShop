import React from 'react';

export default function ListCartItems(props) {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed" >
      <div>
        <h6 className="my-0">{props.cartItem.name}</h6>
        <span className="badge badge-secondary badge-pill">{props.cartItem.count}</span>
      </div>
      <span className="text-muted">${(props.cartItem.price / 100).toFixed(2)}</span>
    </li>
  );
}

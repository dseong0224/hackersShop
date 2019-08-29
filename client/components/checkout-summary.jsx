import React from 'react';

export default function ListCartItems(props) {
  return (
    <li className="list-group-item d-flex justify-content-between lh-condensed" >
      <div>
        <h6 className="my-0">{props.data.productName}</h6>
      </div>
      <span className="text-muted">${(props.data.price / 100).toFixed(2)}</span>
    </li>
  );
}

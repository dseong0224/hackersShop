import React from 'react';

export default function CartSummaryItem(props) {
  function viewDetails() {
    props.viewCartItemDetails('details', { id: props.data.id });
  }
  return (

    <div className="row align-items-center mt-1 mb-1">
      <img style={{ 'maxWidth': '200px' }} src={props.data.image} className="card-img" alt={props.data.name}/>
      <div className="col-sm-7">
        <h5 className="card-title">{props.data.name}</h5>
        <div className="h5 description-font text-muted">${(props.data.price / 100).toFixed(2)}</div>

        {/* <div className="h5 mb-3 noselect">Quantity:{console.log(props.data)}
          <i className="fas fa-minus-square pointer-hover mr-2"></i>6
          <i className="fas fa-plus-square pointer-hover ml-2"></i>
        </div> */}
        <div>
          <button type="button" className="btn btn-light mr-1 ml-1 mb-2" onClick={viewDetails} role="button">View details</button>
          <button type="button" className="btn btn-light mr-1 ml-1 mb-2" role="button">Remove</button>
        </div>
      </div>
    </div>
  );
}

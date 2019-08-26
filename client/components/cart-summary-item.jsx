import React from 'react';

export default function CartSummaryItem(props) {
  function viewDetails() {
    props.viewCartItemDetails('details', { id: props.data.id });
  }
  return (
    <div className="card mb-3" style={{ 'maxWidth': '540px' }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <h5 className="card-title">{props.data.name}</h5>
          <img src={props.data.image} className="card-img" alt={props.data.name}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="card-text">
              <h2>Short Description:</h2>
              {props.data.shortDescription}
            </div>
            <p><button type="button" className="btn btn-light" onClick={viewDetails} role="button">View details »</button></p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={props.data.image} className="card-img-top" style={{ 'backgroundImageSize': 'contain' }} alt={props.data.name}/>
        <div className="card-body">
          <h5 className="card-title">{props.data.name}</h5>
          <p className="card-text">${(props.data.price / 100).toFixed(2)}</p>
          <p className="card-text">{props.data.shortDescription}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Add to cart</button>
              <button type="button" className="btn btn-sm btn-outline-secondary">Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductListItem;

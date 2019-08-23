import React from 'react';

export default function ProductListItem(props) {
  function handleClick() {
    props.handleSetViewCallBack('details', { id: props.data.id });
  }
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img src={props.data.image} className="card-img-top" alt={props.data.name} style={{ height: '225px', position: 'relative' }}/>
        <div className="card-body">
          <h5 className="card-title" onClick = {handleClick}>{props.data.name}</h5>
          <p className="card-text">${(props.data.price / 100).toFixed(2)}</p>
          <p className="card-text">{props.data.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export default function ProductListItem(props) {
  function handleClick() {
    props.handleSetViewCallBack('details', { id: props.data.id });
  }
  const imagecenter = {
    height: '225px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div className="mt-2 mb-2 d-flex align-items-stretch col-12 col-sm-6 col-md-4 col-lg-3">
      <div className="card-font text-center shadow-sm card">
        <h5 className="card-title text-black bg-light" onClick = {handleClick} style={{ display: 'inline', cursor: 'pointer', flexDirection: 'row', padding: 10, height: '85px' }}>{props.data.name}</h5>
        <div className="mx-auto" style={imagecenter}>
          <img className="img-fluid contain" onClick = {handleClick} src={props.data.image} style={{ maxHeight: '100%', maxWidth: '100%', cursor: 'pointer' }} alt={props.data.name}/>
        </div>
        <div className="card-body">
          <div className="h5 text-muted mb-1 card-subtitle">${(props.data.price / 100).toFixed(2)}</div>
          <button type="button" className="btn-block btn btn-secondary">MORE INFO</button>
        </div>
      </div>
    </div>
  );
}
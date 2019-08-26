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
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <div className="mx-auto" style={imagecenter}>
          <img onClick = {handleClick} src={props.data.image} className="card-img-top" style={{ width: '250px', cursor: 'pointer' }} alt={props.data.name}/>
        </div>
        <div className="card-body" style={{ height: '250px', flexDirection: 'row', padding: 10 }}>
          <h5 className="card-title" onClick = {handleClick} style={{ display: 'inline', cursor: 'pointer' }}>{props.data.name}</h5>
          <p className="card-text" style={{ display: 'block', paddingTop: '2.5%' }}>${(props.data.price / 100).toFixed(2)}</p>
          <p className="card-text" numberOfLines={3} style={{ flex: 1 }} >{props.data.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}

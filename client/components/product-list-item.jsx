import React from 'react';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.callAddToCart = this.callAddToCart.bind(this);
    this.imagecenter = {
      height: '30vh',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    };
  }

  handleClick() {
    this.props.handleSetViewCallBack('details', { id: this.props.data.id });
  }

  callAddToCart() {
    // console.log('Add to cart:', this.props.data);
    this.props.handleAddToCart(this.props.data);
  }
  render() {
    return (
      <div className="mt-2 mb-2 d-flex align-items-stretch col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="card-font text-center shadow-sm card">
          <h5 className="card-title text-black bg-light" style={{ display: 'inline', flexDirection: 'row', padding: 10, height: '85px' }}>{this.props.data.name}</h5>
          <div style={this.imagecenter}>
            <img onClick = {this.handleClick} src={this.props.data.image} style={{ width: '70%', cursor: 'pointer' }} alt={this.props.data.name}/>
          </div>
          <div className="card-body">
            <div className="h6 mb-3">${(this.props.data.price / 100).toFixed(2)}</div>
            <button type="button" className="mr-1 ml-1 mb-2 btn  btn-outline-secondary" style={{ cursor: 'pointer' }} onClick = {this.handleClick}>View Detail</button>
            {/* <button type="button" className="mr-1 ml-1 mb-2 btn btn-outline-secondary" style={{ cursor: 'pointer' }} onClick = {this.callAddToCart}>Add To Cart</button> */}
            <button type="button" className="mr-1 ml-1 mb-2 btn btn-outline-secondary" style={{ cursor: 'pointer' }}>Add To Cart</button>

          </div>
        </div>
      </div>
    );
  }

}

import React from 'react';
import ProductListItemConfirmationModal from './product-list-item-confirmation-modal';

export default class ProductListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: {}
    };
    this.viewProduct = this.viewProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  viewProduct() {
    this.props.setPage('details', { id: this.props.product.id });
  }

  addToCart() {
    this.props.addToCart(this.props.product, 1);
    // console.log('item to be added: ', this.props.product);
    this.setState({
      currentProduct: this.props.product
    });
    setTimeout(() => {
      this.props.getCartItems();
    }, 100);

  }
  render() {
    const imageStyle = {
      height: '30vh',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center'
    };
    return (
      <div className="mt-2 mb-2 d-flex align-items-stretch col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="col-12 card-font text-center shadow-sm card">
          <h6 className="card-title text-black bg-light" style={{ display: 'inline', flexDirection: 'row', padding: 10, height: '75px' }}>{this.props.product.name}</h6>
          <div style={imageStyle}>
            <img onClick = {this.viewProduct} src={this.props.product.image} style={{ maxHeight: '100%', maxWidth: '100%', cursor: 'pointer' }} alt={this.props.product.name}/>
          </div>
          <div className="card-body">
            <div className="h6 mb-3">${(this.props.product.price / 100).toFixed(2)}</div>
            <button type="button" className="mr-1 ml-1 mb-2 btn  btn-outline-secondary" style={{ cursor: 'pointer' }} onClick = {this.viewProduct}>View Detail</button>
            <ProductListItemConfirmationModal
              addToCart = {this.addToCart}
              setPage={this.props.setPage}
              name={this.state.currentProduct.name}
              image={this.state.currentProduct.image}
              price={this.state.currentProduct.price}/>
          </div>
        </div>
      </div>
    );
  }

}

import React from 'react';
import ProductDetailCarousel from './product-detail-carousel';
import ProductDetailConfirmationModal from './product-detail-confirmation-modal';
import ProductQuantity from '../product-quantity';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      cartQuantity: 1
    };
    this.viewCatalog = this.viewCatalog.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    this.selectProduct(this.props.productId);
  }

  selectProduct(id) {
    fetch('/api/products.php?id=' + id)
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }

  addToCart() {
    this.props.addToCart(this.state.product, this.state.cartQuantity);
    setTimeout(() => {
      this.props.getCartItems();
    }, 100);
  }

  increment() {
    let cartQuantity = this.state.cartQuantity;
    let newQuantity = ++cartQuantity;
    this.setState({
      cartQuantity: newQuantity
    });
  }

  decrement() {
    let cartQuantity = this.state.cartQuantity;
    let newQuantity = --cartQuantity;
    this.setState({
      cartQuantity: newQuantity
    });
  }

  viewCatalog() {
    this.props.setPage('catalog', {});
  }

  render() {
    if (this.state.product) {
      return (
        <div className="mt-3 mb-5 container">
          <div className="row">
            <div className="col-sm-7">
              <ProductDetailCarousel
                key = {this.state.product.id}
                images = {this.state.product.images}
                name = {this.state.product.name}/>
            </div>
            <div className="m-auto col-sm-5">
              <div className="text-center">
                <h4 className="text-dark">{this.state.product.name}</h4>
                <p className="lead mb-3">${(this.state.product.price / 100).toFixed(2)}</p>
                <div className="h4 mb-4 noselect">
                  <ProductQuantity
                    cartQuantity={this.state.cartQuantity}
                    increment={this.increment}
                    decrement={this.decrement}/>
                </div>
                <ProductDetailConfirmationModal
                  name={this.state.product.name}
                  image = {this.state.product.images[0]}
                  price={this.state.product.price}
                  cartQuantity={this.state.cartQuantity}
                  setPage={this.props.setPage}
                  viewCatalog={this.viewCatalog}
                  addToCart={this.addToCart}/>
                <button type="button" className="d-block m-auto btn btn-block btn-light border border-success" onClick = {this.viewCatalog}>BACK TO CATALOG</button>
              </div>
            </div>
          </div><hr/>
          <div className="h5 description-font text-muted">Product Details</div><hr/>
          <div className="h6 description-font">{this.state.product.longDescription}</div>
          <hr/>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

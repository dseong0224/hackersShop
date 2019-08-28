/* eslint-disable no-useless-constructor */
import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.resetCart = this.resetCart.bind(this);
  }
  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }
  setView(name, params) {
    this.setState({ view: {
      name,
      params
    } });
  }
  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(cart => this.setState({ cart }));
  }
  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(newItem => { this.setState({ cart: [...this.state.cart, newItem] }); })
      .catch(error => console.error(error));
  }
  placeOrder(orderObject) {
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(orderObject),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(orderObject => {
        return (this.setState({
          cart: [...this.state.cart, orderObject]
        }));
      })
      .catch(error => console.error(error));
    this.setView('catalog', {});
  }
  resetCart() {
    this.setState({ cart: [] });
  }
  renderOption() {
    if (this.state.view.name === 'details') {
      return <ProductDetails viewdetail={this.state.view.params} updateViewState={this.setView} handleAddToCart={this.addToCart}/>;
    }
    if (this.state.view.name === 'cart') {
      return <CartSummary cartStateProps={this.state.cart} nameStateProps={this.state.view.name} updateViewState={this.setView}/>;
    }
    if (this.state.view.name === 'checkout') {
      return <CheckoutForm cartStateProps={this.state.cart} updateViewState={this.setView} resetCart={this.resetCart} placedOrderProps={this.placeOrder}/>;
    }
    return <ProductList productsFromApi={this.state.products} updateViewState={this.setView}/>;
  }
  render() {
    return (
      <div>
        <Header numberOfItems={this.state.cart.length} updateViewState={this.setView}/>
        {this.renderOption()}
      </div>
    );
  }
}

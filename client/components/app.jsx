/* eslint-disable no-useless-constructor */
import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

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
  }
  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(products => this.setState({ products }))
      .catch(error => console.error(error));
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
  render() {
    if (this.state.view.name === 'details') {
      return (
        <div>
          <Header numberOfItems={this.state.cart.length} updateViewState={this.setView}/>
          <ProductDetails viewdetail={this.state.view.params} updateViewState={this.setView} handleAddToCart={this.addToCart}/>
        </div>
      );
    }
    if (this.state.view.name === 'cart') {
      return (
        <div>
          <Header numberOfItems={this.state.cart.length} updateViewState={this.setView}/>
          <CartSummary cartStateProps={this.state.cart} nameStateProps={this.state.view.name} updateViewState={this.setView}/>
        </div>
      );
    }
    return (
      <div>
        <Header numberOfItems={this.state.cart.length} updateViewState={this.setView}/>
        <ProductList productsFromApi={this.state.products} updateViewState={this.setView}/>
      </div>
    );
  }
}

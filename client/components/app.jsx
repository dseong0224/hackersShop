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
    this.emptyCart = this.emptyCart.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
  }

  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }

  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(products => {
        this.setState({ products });
      });
  }

  setView(name, params) {
    this.setState({ view: {
      name,
      params
    } });
  }

  getCartItems() {
    fetch('/api/cart.php', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(cart => {
        this.setState({ cart });
      })
      .catch(error => {
        console.error('Failed to retrieve cart: ', error);
      });
  }

  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify({
        id: parseInt(product.id)
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      // .then(console.log)
      .catch(error => {
        console.error('Post Error: ', error);
      });
  }

  placeOrder(items) {
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(items),
      headers: { 'Content-Type': 'application/json' }
    });
    this.setView('catalog', {});
  }

  emptyCart() {
    this.setState({ cart: [] });
  }

  renderPage() {
    if (this.state.view.name === 'details') {
      return <ProductDetails getCartItems={this.getCartItems} detailId={this.state.view.params.id} viewdetail={this.state.view.params} updateViewState={this.setView} handleAddToCart={this.addToCart}/>;
    }
    if (this.state.view.name === 'cart') {
      return <CartSummary getCartItems={this.getCartItems} cartStateProps={this.state.cart} nameStateProps={this.state.view.name} updateViewState={this.setView}/>;
    }
    if (this.state.view.name === 'checkout') {
      return <CheckoutForm getCartItems={this.getCartItems} cartStateProps={this.state.cart} updateViewState={this.setView} emptyCart={this.emptyCart} placedOrderProps={this.placeOrder}/>;
    }
    return <ProductList getCartItems={this.getCartItems} productsFromApi={this.state.products} updateViewState={this.setView} viewdetail={this.state.view.params} handleAddToCart={this.addToCart}/>;
  }
  render() {
    return (
      <div>
        <Header numberOfItems={this.state.cart.length} updateViewState={this.setView}/>
        {this.renderPage()}
      </div>
    );
  }
}

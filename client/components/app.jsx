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
        page: 'catalog',
        params: {}
      },
      cart: [],
      cartQuantity: 0
    };
    this.setPage = this.setPage.bind(this);
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

  setPage(page, params) {
    this.setState({ view: {
      page,
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
        this.setState({
          cart
        }, this.getCartQuantity);
      })
      .catch(error => {
        console.error('Failed to retrieve cart: ', error);
      });
  }

  getCartQuantity() {
    let cart = this.state.cart;
    let cartQuantity = 0;
    for (let cartItemIndex = 0; cartItemIndex < cart.length; cartItemIndex++) {
      // console.log("cart", cart);
      cartQuantity += parseInt(cart[cartItemIndex].count);
    }
    this.setState({
      cartQuantity
    });
  }

  addToCart(product, quantity) {
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify({
        id: parseInt(product.id),
        count: quantity
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      // .then(console.log)
      .catch(error => {
        console.error('Post Error: ', error);
      });
  }

  placeOrder(items) { // not used
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(items),
      headers: { 'Content-Type': 'application/json' }
    });
    this.setPage('catalog', {});
  }

  emptyCart() {
    this.setState({ cart: [] });
  }

  renderPage() {
    if (this.state.view.page === 'details') {
      return <ProductDetails getCartItems={this.getCartItems} productId={this.state.view.params.id} viewdetail={this.state.view.params} setPage={this.setPage} addToCart={this.addToCart}/>;
    }
    if (this.state.view.page === 'cart') {
      return <CartSummary getCartItems={this.getCartItems} cartQuantity={this.state.cartQuantity} cart={this.state.cart} page={this.state.view.page} setPage={this.setPage}/>;
    }
    if (this.state.view.page === 'checkout') {
      return <CheckoutForm getCartItems={this.getCartItems} cartQuantity={this.state.cartQuantity} cart={this.state.cart} setPage={this.setPage} emptyCart={this.emptyCart}/>;
    }
    return <ProductList getCartItems={this.getCartItems} productList={this.state.products} setPage={this.setPage} viewdetail={this.state.view.params} addToCart={this.addToCart}/>;
  }
  render() {
    return (
      <div>
        <Header getCartItems={this.getCartItems} cartQuantity={this.state.cartQuantity} setPage={this.setPage}/>
        {this.renderPage()}
      </div>
    );
  }
}

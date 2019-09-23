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
        product: {}
      },
      cart: [],
      cartQuantity: 0
    };
    this.setPage = this.setPage.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
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

  setPage(page, product) {
    this.setState({ view: {
      page,
      product
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
      .catch(error => {
        console.error('Post Error: ', error);
      });
  }

  updateCart(product, quantity) {
    fetch('/api/cart.php', {
      method: 'PUT',
      body: JSON.stringify({
        id: parseInt(product.id),
        updatedQuantity: quantity
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch(error => {
        console.error('Update Error: ', error);
      });
  }

  removeItemFromCart(product) { //  removes selected item
    fetch('/api/cart.php', {
      method: 'DELETE',
      body: JSON.stringify({
        id: parseInt(product.id)
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .catch(error => {
        console.error('Delete Error: ', error);
      });
  }

  placeOrder(items) { // no fetch set up
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(items),
      headers: { 'Content-Type': 'application/json' }
    });
    this.setState(
      {
        view: {
          page: 'catalog',
          product: {}
        },
        cart: [],
        cartQuantity: 0
      });
  }

  emptyCart() { // empties entire cart
    let cartItems = this.state.cart;
    for (let cartItemIndex = 0; cartItemIndex < cartItems.length; cartItemIndex++) {
      this.removeItemFromCart(cartItems[cartItemIndex]);
    }
    setTimeout(() => {
      this.getCartItems();
    }, 100);
  }

  renderPage() {
    if (this.state.view.page === 'details') {
      return (
        <ProductDetails // shows detail for selected item
          productId={this.state.view.product.id}
          setPage={this.setPage}
          addToCart={this.addToCart}
          getCartItems={this.getCartItems}/>);
    }
    if (this.state.view.page === 'cart') {
      return (
        <CartSummary
          cart={this.state.cart}
          getCartItems={this.getCartItems}
          cartQuantity={this.state.cartQuantity}
          page={this.state.view.page}
          setPage={this.setPage}
          removeItemFromCart={this.removeItemFromCart}
          updateCart={this.updateCart}/>);
    }
    if (this.state.view.page === 'checkout') {
      return (
        <CheckoutForm
          getCartItems={this.getCartItems}
          cartQuantity={this.state.cartQuantity}
          cart={this.state.cart}
          setPage={this.setPage}
          emptyCart={this.emptyCart}/>);
    }
    return (
      <ProductList
        getCartItems={this.getCartItems}
        productList={this.state.products}
        setPage={this.setPage}
        viewProduct={this.state.view.product}
        addToCart={this.addToCart}/>);
  }

  render() {
    return (
      <React.Fragment>
        <Header
          getCartItems={this.getCartItems}
          cartQuantity={this.state.cartQuantity}
          setPage={this.setPage}/>
        {this.renderPage()}
      </React.Fragment>
    );
  }
}

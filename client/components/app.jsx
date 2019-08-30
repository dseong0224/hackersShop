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
    // this.placeOrder = this.placeOrder.bind(this);
    // this.deleteFromCart = this.deleteFromCart.bind(this);
    // this.getCartItems = this.getCartItems.bind(this);
    // this.updateCart = this.updateCart.bind(this);
  }
  componentDidMount() {
    this.getProducts();
    this.getCartItems();
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(products => {
        // const image = products.images[0];
        // console.log('fetched products: ', products);
        // products.mainImage = image;
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
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(cart => this.setState({ cart }))
      .catch(error => {
        console.error('Failed to retrieve cart: ', error);
      });
  }
  addToCart(product) {
    if (!product.image) {
      product.image = product.images[0];
    }

    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' }
    });
    // .then(response => response.json())
    // .then(newItem => { this.setState({ cart: [...this.state.cart, newItem] }); })
    // .catch(error => console.error(error));
  }
  placeOrder(orderObject) {
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(orderObject),
      headers: { 'Content-Type': 'application/json' }
    });
    // .then(response => response.json())
    // .then(orderObject => {
    //   return (this.setState({
    //     cart: [...this.state.cart, orderObject]
    //   }));
    // })
    // .catch(error => console.error(error));
    this.setView('catalog', {});
  }
  resetCart() {
    this.setState({ cart: [] });
  }
  renderOption() {
    if (this.state.view.name === 'details') {
      return <ProductDetails detailId={this.state.view.params.id} viewdetail={this.state.view.params} updateViewState={this.setView} handleAddToCart={this.addToCart} getCartItems={this.getCartItems}/>;
    }
    if (this.state.view.name === 'cart') {
      return <CartSummary cartStateProps={this.state.cart} nameStateProps={this.state.view.name} updateViewState={this.setView}/>;
    }
    if (this.state.view.name === 'checkout') {
      return <CheckoutForm cartStateProps={this.state.cart} updateViewState={this.setView} resetCart={this.resetCart} placedOrderProps={this.placeOrder}/>;
    }
    return <ProductList productsFromApi={this.state.products} updateViewState={this.setView} viewdetail={this.state.view.params} handleAddToCart={this.addToCart}/>;
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

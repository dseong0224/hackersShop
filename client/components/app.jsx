/* eslint-disable no-useless-constructor */
import React from 'react';
import Header from './header';
import ProductListItem from './product-list-item';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
    this.getProducts = this.getProducts.bind(this);
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(products => this.setState({ products }))
      .catch(error => console.error(error));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    return (
      <div>
        <Header/>
        <ProductListItem productsFromApi={this.state.products}/>
      </div>
    );

  }
}

/* eslint-disable no-useless-constructor */
import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      view: {
        name: 'catalog',
        params: {}
      } };
    this.setView = this.setView.bind(this);
  }
  componentDidMount() {
    this.getProducts();
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

  render() {
    if (this.state.view.name === 'details') {
      return (
        <div>
          <Header/>
          <ProductDetails viewdetail={this.state.view.params} updateViewState={this.setView}/>
        </div>
      );
    }
    return (
      <div>
        <Header/>
        <ProductList productsFromApi={this.state.products} updateViewState={this.setView}/>
      </div>
    );
  }
}

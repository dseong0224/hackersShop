import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.makeProductList = this.makeProductList.bind(this);
  }

  makeProductList() {
    return this.props.productsFromApi.map(product => {
      return <ProductListItem key={product.id} data={product} handleSetViewCallBack={this.props.updateViewState}/>;
    });
  }

  render() {
    return (
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            {this.makeProductList()}
          </div>
        </div>
      </div>
    );
  }

}

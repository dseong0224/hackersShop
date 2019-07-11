import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {

  makeProductList() {
    return this.props.productsFromApi.map(product => <ProductListItem key={product.id} data={product}/>);
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

export default ProductList;

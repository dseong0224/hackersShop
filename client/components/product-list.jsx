import React from 'react';
import ProductListItem from './product-list-item';
import ListCarousel from './product-list-carousel';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.makeProductList = this.makeProductList.bind(this);
  }

  makeProductList() {
    return this.props.productList.map(product => {
      return <ProductListItem
        key={product.id}
        product={product}
        setPage={this.props.setPage}
        addToCart={this.props.addToCart}
        getCartItems={this.props.getCartItems}/>;
    });
  }

  render() {
    return (
      <React.Fragment>

        <ListCarousel products={this.props.productList} setPage={this.props.setPage}/>
        <main>
          <div className="justify-content-md-center mr-1 ml-1 row">
            {this.makeProductList()}
          </div>
        </main>
      </React.Fragment>

    );
  }

}

import React from 'react';
import ProductListItem from './product-list-item';
import ListCarousel from './product-list-carousel';

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
      <React.Fragment>
        <ListCarousel/>
        <main>
          <div className="justify-content-md-center mr-1 ml-1 row">
            {this.makeProductList()}
          </div>
        </main>
      </React.Fragment>

    );
  }

}

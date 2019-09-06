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
      return <ProductListItem key={product.id} data={product} handleSetViewCallBack={this.props.updateViewState} addToCart={this.props.addToCart} getCartItems={this.props.getCartItems}/>;
    });
  }

  render() {
    return (
      <React.Fragment>
        <ListCarousel products={this.props.productsFromApi} handleSetViewCallBack={this.props.updateViewState}/>
        {/* {console.log('this.props.productsFromApi: ', this.props.productsFromApi[5])} */}
        <main>
          <div className="justify-content-md-center mr-1 ml-1 row">
            {this.makeProductList()}
          </div>
        </main>
      </React.Fragment>

    );
  }

}

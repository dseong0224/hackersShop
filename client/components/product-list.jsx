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
      <React.Fragment>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className=""></li>
            <li data-target="#myCarousel" data-slide-to="1" className=""></li>
            <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item">
              <img style={{ height: '50vh', position: 'relative', right: '-15%' }} src="https://images-na.ssl-images-amazon.com/images/I/61umHSM6OhL._SL1200_.jpg"/>
              <div className="container">
                <div className="carousel-caption text-dark text-right">
                  <h1>SK621</h1>
                  <p>LOW PROFILE. RGB BACKLIGHTING AND RING</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img style={{ height: '50vh', position: 'relative', right: '-10%' }} src="https://assets.logitech.com/assets/55384/k380-multi-device-bluetooth-keyboard.png"/>
              <div className="container">
                <div className="carousel-caption text-dark text-right">
                  <h1>k380</h1>
                  <p>Compact, lightweight, Bluetooth keyboard anywhere in your home.</p>
                  <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item active">
              <img style={{ height: '50vh', position: 'relative', right: '-50%' }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLA22B?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5%2C0.5&.v=1496943865511"/>
              <div className="container">
                <div className="carousel-caption text-dark text-left">
                  <h1>Apple</h1>
                  <p>For Gorgeous Design and Apple Ecosystem</p>
                  <p><a className="btn btn-lg btn-default border border-dark" href="#" role="button">View Product</a></p>
                </div>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <main>
          <div className="justify-content-md-center mr-1 ml-1 row">
            {this.makeProductList()}
          </div>
        </main>

      </React.Fragment>

    );
  }

}

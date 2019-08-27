import React from 'react';
import ProductListItem from './product-list-item';

export default class Carousel extends React.Component {
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
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className=""></li>
          <li data-target="#myCarousel" data-slide-to="1" className=""></li>
          <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">
            <img style={{ width: '100%', position: 'relative', right: '-50%' }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mice-keyboards-accessories-201810?wid=2620&hei=640&fmt=png-alpha&qlt=80&.v=1538176313480"/>
            <div className="container">
              <div className="carousel-caption text-left">
                <h1>Example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img style={{ width: '100%', position: 'relative', right: '-50%' }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mice-keyboards-accessories-201810?wid=2620&hei=640&fmt=png-alpha&qlt=80&.v=1538176313480"/>
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div className="carousel-item active">
            <img style={{ width: '100%', position: 'relative', right: '-50%' }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mice-keyboards-accessories-201810?wid=2620&hei=640&fmt=png-alpha&qlt=80&.v=1538176313480"/>
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
    );
  }

}

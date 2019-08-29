import React from 'react';
import ProductDetailCarouselImgs from './product-detail-carousel';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.resetSetView = this.resetSetView.bind(this);
    this.callAddToCart = this.callAddToCart.bind(this);
  }

  selectItem(id) {
    fetch('/api/products.php?id=' + id)
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }

  componentDidMount() {
    this.selectItem(this.props.detailId);
  }

  makeCarousel() {
    let carouselImagesArray = [];
    for (let imageIndex = 1; imageIndex < this.state.product.images.length; imageIndex++) {
      carouselImagesArray.push(
        <ProductDetailCarouselImgs key={this.state.product.id} imageSrc={this.state.product.images[imageIndex]} productName={this.state.product.productName}/>
      );
      return carouselImagesArray;
    }
  }

  resetSetView() {
    this.props.updateViewState('catalog', {});
  }

  callAddToCart() {
    this.props.handleAddToCart(this.state.product);
  }

  render() {
    // console.log("this.state.product from product-detail: ",this.state.product)

    if (this.state.product) {
      return (
        <div className="mt-3 mb-5 container">
          <div className="row">
            <div className="col-sm-7">
              {/* <React.Fragment> */}
              <div className="bs-example">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>

                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img width="90%" src={this.state.product.images[0]} alt={this.state.product.productName} className="card-img"/>
                      {/* {console.log('this.state.product from product-detail: ', this.state.product)} */}
                    </div>
                    {this.makeCarousel()}
                  </div>
                  <a className="carousel-control-prev" href="#myCarousel" data-slide="prev" style={{ filter: 'invert(100%)' }}>
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a className="carousel-control-next" href="#myCarousel" data-slide="next" style={{ filter: 'invert(100%)' }}>
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
              {/* </React.Fragment> */}

            </div>
            <div className="m-auto col-sm-5">
              <div className="text-center">
                <h4 className="text-dark">{this.state.product.productName}</h4>
                <p className="lead mb-3">${(this.state.product.price / 100).toFixed(2)}</p>
                <div className="h5 mb-1">Quantity:</div>
                <div className="h4 mb-4 noselect">
                  <i className="fas fa-minus-square pointer-hover ml-3 mr-4"></i>
                  1
                  <i className="fas fa-plus-square pointer-hover ml-4 mr-3"></i>
                </div>
                <button type="button" className="mb-2 btn btn-success btn-lg" onClick={this.callAddToCart}>ADD TO CART</button>
                <button type="button" className="d-block m-auto btn btn-light border border-success" onClick={this.resetSetView}>&#60;&#60; BACK TO CATALOG</button>
              </div>
            </div>
          </div><hr/>
          <div className="h5 description-font text-muted">Product Details</div><hr/>
          <div className="h6 description-font">{this.state.product.longDescription}</div>
          <hr/>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}

import React from 'react';
import ProductDetailCarouselImgs from './product-detail-carousel';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.resetSetView = this.resetSetView.bind(this);
    this.callAddToCart = this.callAddToCart.bind(this);
    this.generateCarouselIndicator = this.generateCarouselIndicator.bind(this);
    this.carouselImagesArray = [];
    this.carouselIndicator = [];
  }

  selectItem(id) {
    // console.log('Product ID:', id);
    fetch('/api/products.php?id=' + id)
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }

  componentDidMount() {
    this.selectItem(this.props.detailId);
  }

  makeCarousel() {
    for (let imageIndex = 1; imageIndex < this.state.product.images.length; imageIndex++) {
      this.carouselImagesArray.push(
        <ProductDetailCarouselImgs key={this.state.product.images[imageIndex]} imageSrc={this.state.product.images[imageIndex]} productName={this.state.product.name}/>
      );
    }
    return this.carouselImagesArray;
  }

  generateCarouselIndicator() {
    for (let carouselIndex = 1; carouselIndex < this.state.product.images.length; carouselIndex++) {
      this.carouselIndicator.push(
        <li data-target="#myCarousel" data-slide-to= "{carouselIndex}"></li>
      );
    }
    return this.carouselIndicator;
  }

  resetSetView() {
    this.props.updateViewState('catalog', {});
  }

  callAddToCart() {
    // if (this.state.product.images.length !== 1) {
    // this.setState({

    // })
    // this.state.product['image'] = this.state.product['images'].slice(0, 1);
    // }

    // console.log('Details add to cart:', this.state.product);

    const product = JSON.stringify(this.state.product);

    // this.props.handleAddToCart(JSON.parse(product));
    this.props.handleAddToCart(product);

    // setTimeout(() => {
    this.props.getCartItems();

    // }, 1000);
  }

  render() {
    if (this.state.product) {
      return (
        <div className="mt-3 mb-5 container">
          <div className="row">
            <div className="col-sm-7">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" style={{ filter: 'invert(100%)' }}>
                  <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                  {this.generateCarouselIndicator()}
                </ol>
                <div className="carousel-inner" style={{ height: '40vh', display: 'flex', alignItems: 'center' }}>
                  <div className="carousel-item active">
                    <img height="100%" src={this.state.product.images[0]} alt={this.state.product.name} className="card-img"/>
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
            <div className="m-auto col-sm-5">
              <div className="text-center">
                <h4 className="text-dark">{this.state.product.name}</h4>
                <p className="lead mb-3">${(this.state.product.price / 100).toFixed(2)}</p>
                <div className="h5 mb-1">Quantity:</div>
                <div className="h4 mb-4 noselect">
                  <i className="fas fa-minus-square pointer-hover ml-3 mr-4"></i>
                  1
                  <i className="fas fa-plus-square pointer-hover ml-4 mr-3"></i>
                </div>
                <button type="button" className="mb-2 btn btn-lg btn-success" onClick={this.callAddToCart}>ADD TO CART</button>
                <button type="button" className="d-block m-auto btn btn-lg btn-light border border-success" onClick={this.resetSetView}>TO CATALOG</button>
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

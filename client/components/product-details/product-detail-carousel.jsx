import React from 'react';
import ProductDetailCarouselImgs from './product-detail-carousel-image';

export default class ProductDetailCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.carouselImagesArray = [];
    this.carouselIndicator = [];
    this.renderProductCarousel = this.renderProductCarousel.bind(this);
    this.generateCarouselIndicator = this.generateCarouselIndicator.bind(this);
  }

  renderProductCarousel() {
    for (let imageIndex = 1; imageIndex < this.props.images.length; imageIndex++) {
      this.carouselImagesArray.push(
        <ProductDetailCarouselImgs
          key={this.props.images[imageIndex]}
          imageSrc={this.props.images[imageIndex]}
          productName={this.props.name}/>
      );
    }
    return this.carouselImagesArray;
  }

  generateCarouselIndicator() {
    for (let carouselIndex = 1; carouselIndex < this.props.images.length; carouselIndex++) {
      this.carouselIndicator.push(
        <li data-target="#myCarousel" data-slide-to= "{carouselIndex}"></li>
      );
    }
    return this.carouselIndicator;
  }

  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators" style={{ filter: 'invert(100%)' }}>
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          {this.generateCarouselIndicator()}
        </ol>
        <div className="carousel-inner" style={{ height: '70vh', display: 'flex', alignItems: 'center' }}>
          <div className="carousel-item active">
            <img height="100%" src={this.props.images[0]} alt={this.props.name} className="card-img"/>
          </div>
          {this.renderProductCarousel()}
        </div>
        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev" style={{ filter: 'invert(100%)' }}>
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" data-slide="next" style={{ filter: 'invert(100%)' }}>
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  }

}

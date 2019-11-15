import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.detailForProduct1 = this.detailForProduct1.bind(this);
    this.detailForProduct2 = this.detailForProduct2.bind(this);
    this.detailForProduct3 = this.detailForProduct3.bind(this);
  }

  detailForProduct1() {
    this.props.setPage('details', { id: this.props.products[0].id });
  }
  detailForProduct2() {
    this.props.setPage('details', { id: this.props.products[2].id });
  }
  detailForProduct3() {
    this.props.setPage('details', { id: this.props.products[5].id });
  }

  render() {
    return (
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators" style={{ filter: 'invert(100%)' }}>
          <li data-target="#myCarousel" data-slide-to="0" className=""></li>
          <li data-target="#myCarousel" data-slide-to="1" className=""></li>
          <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item">

            <div className="carousel-caption text-dark text-right" style={{ display: 'inline-block', position: 'relative', marginTop: '5%', marginRight: '20%' }}>
              <h1>SK621</h1>
              <p>LOW PROFILE. RGB BACKLIGHTING AND RING</p>
              <p><a className="btn btn-lg btn-default border border-dark" style={{ cursor: 'pointer' }} role="button" onClick={this.detailForProduct1}>View Product</a></p>
            </div>
            <img style={{ height: '50vh', position: 'relative', right: '-10%', marginTop: '-10%' }} src="https://images-na.ssl-images-amazon.com/images/I/61umHSM6OhL._SL1200_.jpg"/>

          </div>
          <div className="carousel-item">
            <div className="carousel-caption text-dark text-right" style={{ display: 'inline-block', position: 'relative', marginRight: '25%' }}>
              <h1>k380</h1>
              <p>Compact, lightweight, Bluetooth keyboard anywhere in your home.</p>
              <p><a className="btn btn-lg btn-default border border-dark" style={{ cursor: 'pointer' }} role="button" onClick={this.detailForProduct2}>View Product</a></p>
            </div>
            <img style={{ height: '45vh', position: 'relative', right: '-10%' }} src="https://assets.logitech.com/assets/55384/k380-multi-device-bluetooth-keyboard.png"/>

          </div>
          <div className="carousel-item active">

            <div className="carousel-caption text-dark text-left" style={{ display: 'inline-block', position: 'relative' }}>
              <h1>Apple</h1>
              <p>For Gorgeous Design and Apple Ecosystem</p>
              <p><a className="btn btn-lg btn-default border border-dark" style={{ cursor: 'pointer' }} role="button" onClick={this.detailForProduct3}>View Product</a></p>
            </div>

            <img style={{ height: '50vh', position: 'relative', right: '-30%' }} src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MLA22B?wid=2000&hei=2000&fmt=jpeg&qlt=95&op_usm=0.5%2C0.5&.v=1496943865511"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" style={{ filter: 'invert(100%)' }} aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" style={{ filter: 'invert(100%)' }} aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }

}

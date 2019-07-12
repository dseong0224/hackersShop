import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.resetSetView = this.resetSetView.bind(this);
    this.callAddToCart = this.callAddToCart.bind(this);
  }

  componentDidMount() {
    fetch('/api/products.php?id=1')
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }

  resetSetView() {
    this.props.updateViewState('catalog', {});
  }

  callAddToCart() {
    this.props.handleAddToCart(this.state.product);
  }

  render() {
    if (this.state.product) {
      return (
        <div className="container">
          <header className="masthead mb-auto">
            <div className="inner">
              <nav className="nav nav-masthead">
                <div className="btn-group btn-group-toggle" data-toggle="buttons">
                  <label className="btn btn-secondary active">
                    <a onClick={this.resetSetView} checked>Back to Catalog</a>
                  </label>
                </div>
              </nav>
            </div>
          </header>
          <div className="text-center">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"></div>
          </div>
          <div className="row">
            <div className="col-6">
              <img src={this.state.product.image} className="img-fluid" alt={this.state.product.name}></img>
            </div>
            <div className="col-6">
              <main role="main" className="inner cover">
                <h5 className="masthead-brand">Product Details</h5>
                <h4 className="cover-heading">{this.state.product.name}</h4>
                <p className="lead">${(this.state.product.price / 100).toFixed(2)}</p>
                <h5>Summary:</h5>
                <p>{this.state.product.shortDescription}</p>
                <button onClick={this.callAddToCart}>Add to Cart</button>
              </main>
            </div>
          </div>
          <h5>About this product:</h5>
          <p>{this.state.product.longDescription}</p>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
export default ProductDetails;

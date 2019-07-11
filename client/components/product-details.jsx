import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };
    this.resetSetView = this.resetSetView.bind(this);
  }

  componentDidMount() {
    fetch('/api/products.php?id=1')
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }

  resetSetView() {
    this.props.updateViewState('catalog', {});
  }

  render() {
    if (this.state.product) {
      return (
        <div className="text-center">
          <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
            <header className="masthead mb-auto">
              <div className="inner">
                <nav className="nav nav-masthead justify-content-center">

                  <div className="btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active">
                      <a onClick={this.resetSetView} checked>Back to Catalog</a>
                    </label>
                  </div>
                </nav>
                <h5 className="masthead-brand">Product Details</h5>
              </div>
            </header>

            <main role="main" className="inner cover">
              <h4 className="cover-heading">{this.state.product.name}</h4>
              <img src={this.state.product.image} className="img-fluid" alt={this.state.product.name}></img>
              <h5>About this product:</h5>
              <p>{this.state.product.longDescription}</p>
              <p className="lead">${(this.state.product.price / 100).toFixed(2)}</p>
            </main>
          </div>
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
export default ProductDetails;

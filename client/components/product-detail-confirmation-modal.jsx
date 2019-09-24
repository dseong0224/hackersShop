import React from 'react';

export default class ProductDetailConfirmationModal extends React.Component {
  constructor(props) {
    super(props);
    this.goToCart = this.goToCart.bind(this);
  }

  goToCart() {
    this.props.setPage('cart', {});
  }

  render() {
    return (
      <React.Fragment>
        <button type="button" className="mb-2 btn btn-block btn-success" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.props.addToCart}>ADD TO CART</button>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">{this.props.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row align-items-center mt-1 mb-1">
                  <img src={this.props.image} alt={this.props.name} className="col-sm-5 mx-auto"/>
                  <div className="col-sm-7 card-font">
                    <div className="h5 description-font text-muted">Price: ${(this.props.price / 100).toFixed(2)}</div>
                    <div className="h5 mb-3">Quanity: {this.props.cartQuantity}</div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="mr-1 ml-1 mb-2 btn btn-outline-secondary" data-dismiss="modal" onClick={this.props.viewCatalog}>Continue Shopping</button>
                <button type="button" className="mr-1 ml-1 mb-2 btn btn-outline-secondary" data-dismiss="modal" onClick={this.goToCart}>Go To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

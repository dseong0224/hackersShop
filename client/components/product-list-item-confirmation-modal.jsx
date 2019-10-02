import React from 'react';

export default class ProductListItemConfirmationModal extends React.Component {
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
        <button type="button" className="mr-1 ml-1 mb-2 btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.props.addToCart}>
          Add To Cart
        </button>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Confirmation
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  ITEM ADDED
                </h5>
              </div>
              <div className="modal-footer">
                <button type="button" className="mr-1 ml-1 mb-2 btn btn-outline-secondary" data-dismiss="modal">Continue Shopping</button>
                <button type="button" className="mr-1 ml-1 mb-2 btn btn-outline-secondary" data-dismiss="modal" onClick={this.goToCart}>Go To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

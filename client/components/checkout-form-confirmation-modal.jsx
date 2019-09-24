import React from 'react';
import CheckoutModalDetail from './checkout-form-confirmation-modal-detail';
import CheckoutModalItem from './checkout-form-confirmation-modal-item';

export default class CheckoutConfirmationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <React.Fragment>
        <button type="button" className="btn btn-success btn-block mt-2 mb-2" data-toggle="modal" data-target="#exampleModalLong" onClick={this.props.placeOrder}>PLACE ORDER</button>
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="card-font modal-header">
                <h5 className="modal-title">ORDER CONFIRMATION</h5>
                <button type="button" className="close" aria-label="Close" data-dismiss="modal">
                  <span aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <div className="container mb-3 text-center description-font font-weight-bold">Would you like to submit your order?</div>
                <CheckoutModalDetail/>
                <hr/>
                <div className="h3 card-font text-center font-weight-bold">Order Total: ${this.props.orderTotal}</div>
                <div className="description-font text-muted text-center">{this.props.cartQuantity} item(s)</div>
                <div className="align-content-center">
                  <CheckoutModalItem/>
                </div>
              </div>
              <div className="card-font modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCEL</button>
                <button type="button" className="btn btn-success">SUBMIT</button></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

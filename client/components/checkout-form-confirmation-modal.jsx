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
        <button type="button" className="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModalLong" onClick={this.props.placeOrder}>PLACE ORDER</button>
        <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="card-font modal-header">
                <h5 className="modal-title"><i className="fas fa-exclamation-circle text-warning"></i> FINAL CONFIRMATION</h5>
                <button type="button" className="close" aria-label="Close" data-dismiss="modal">
                  <span aria-hidden="true">×</span></button>
              </div>
              <div className="modal-body">
                <div className="container mb-3 text-center description-font font-weight-bold">Would you like to submit your order?</div>
                <CheckoutModalDetail/>
                <hr/>
                <div className="h3 card-font text-center font-weight-bold">Order Total: $5068.86</div>
                <div className="description-font text-muted text-center">15 item(s)</div>
                <div className="align-content-center">
                  <CheckoutModalItem/>
                  <div className="mt-3 mb-3"><hr/>
                    <div className="row align-items-center mt-1 mb-1">
                      <img src="./media/2-1.png" alt="" className="col-sm-5 mx-auto"/>
                      <div className="col-sm-7">
                        <div className="h6 card-font">Zoom Lebron III</div>
                        <div className="h6 card-font text-muted">Houston</div>
                        <div className="h6 description-font text-muted">$175.00</div>
                        <div className="h6">Quantity: 1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-font modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">RETURN TO CHECKOUT</button>
                <button type="button" className="btn btn-success">SUBMIT ORDER</button></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

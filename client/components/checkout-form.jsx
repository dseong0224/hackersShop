import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.placeOrder = this.placeOrder.bind(this);
  }
  placeOrder() {
    event.preventDefault();
    this.props.updateViewState('catalog', {});
    this.props.resetCart();
  }
  render() {
    return (
      <div className="bg-light">
        <div className="container">
          <div className="py-5 text-center">
            <strong>ROE</strong>
            <svg className="d-block mx-auto mb-4" width="72" height="72" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            <h2>Checkout form</h2>
            <p className="lead">Cart</p>
          </div>
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$0</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="First and Last Name" />
                    <div className="invalid-feedback">Valid first name is required.</div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">Address</label>
                  <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                  <div className="invalid-feedback">Please enter your shipping address</div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cc-number">Credit card number</label>
                    <input type="number" className="form-control" id="cc-number" placeholder="123456789"/>
                    <div className="invalid-feedback">Credit card number is required</div>
                  </div>
                </div>
                <div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={this.placeOrder}>Place Order</button>
                  <button className="btn btn-primary btn-lg btn-block" type="button">Back to Shopping</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

import React from 'react';
import ListCartItems from './checkout-summary';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.placeOrder = this.placeOrder.bind(this);
  }
  placeOrder() {
    event.preventDefault();
    this.props.setPage('catalog', {});
    this.props.emptyCart();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="py-5 text-center">
            <h2>Cart Checkout</h2>
          </div>
          <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-muted">Your cart</span>
                <span className="badge badge-secondary badge-pill">{this.props.cart.length}</span>
              </h4>
              <ul className="list-group mb-3">
                {this.props.cart.map(cartItem => {
                  return <ListCartItems key={cartItem.id} data={cartItem}/>;
                })
                }
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>{totalPrice(this.props.cart)}</strong>
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
              </form>
            </div>
          </div>
          <div className="col-sm-5">
            <button type="button" className="btn btn-success btn-block" onClick={this.placeOrder}>PLACE ORDER</button>
            <button type="button" className="btn btn-secondary border border-success btn-block">BACK TO CART</button>
          </div>
        </div>
      </div>

    );
  }
}

function totalPrice(cartItems) {
  let priceTotal = 0;
  for (var priceIndex = 0; priceIndex < cartItems.length; priceIndex++) {
    priceTotal += parseFloat(cartItems[priceIndex].price);
  }
  return '$' + (priceTotal * 1.09 / 100).toFixed(2);
}

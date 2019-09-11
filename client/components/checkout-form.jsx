import React from 'react';
import ListCartItems from './checkout-summary';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.placeOrder = this.placeOrder.bind(this);
    this.goToCart = this.goToCart.bind(this);
    this.calculateSubTotal = this.calculateSubTotal.bind(this);
  }

  goToCart() {
    this.props.setPage('cart', {});
  }

  placeOrder() {
    event.preventDefault();
    this.props.setPage('catalog', {});
    this.props.emptyCart();
  }

  calculateSubTotal() {
    let cart = this.props.cart;
    let subTotal = 0;
    for (let cartItemIndex = 0; cartItemIndex < cart.length; cartItemIndex++) {
      subTotal += cart[cartItemIndex].count * cart[cartItemIndex].price;
    }
    subTotal = subTotal * 1.15;
    return (subTotal / 100).toFixed(2);
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
                <span className="badge badge-secondary badge-pill">{this.props.cartQuantity}</span>
              </h4>
              <ul className="list-group mb-3">
                {this.props.cart.map(cartItem => {
                  return <ListCartItems key={cartItem.id} cartItem={cartItem}/>;
                })
                }
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$ {this.calculateSubTotal()}</strong>
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
            <button type="button" className="btn btn-secondary border border-success btn-block" onClick={this.goToCart}>BACK TO CART</button>
          </div>
        </div>
      </div>

    );
  }
}

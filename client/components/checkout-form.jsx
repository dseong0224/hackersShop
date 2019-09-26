import React from 'react';
import CheckoutConfirmationModal from './checkout-form-confirmation-modal';
import ListCartItems from './checkout-summary';
import PaymentInfoValidation from './payment-info-validation';

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
    return (subTotal / 100).toFixed(2);
  }

  render() {
    return (
      <div>
        <div className="mt-4 mb-5 container">
          <div className="py-5 text-center">
            <h2>Cart Checkout</h2>
          </div>
          <div className="row">
            <div className="col-sm-7">
              <div className="mb-2">
                <div className="h4 card-header">Shipping</div>
                <div className="card-body">
                  <p className="card-text"> Shipping Info </p>
                  <div className="mb-1 input-group"><input placeholder="Name" name="name" type="text" className="form-control"/></div>
                  <div className="mb-1 input-group"><input placeholder="Shipping Address" name="address" type="text" className="form-control"/></div>
                </div>
              </div>
              <div className="mb-2">
                <div className="h4 card-header">Payment</div>
                <PaymentInfoValidation/>
              </div>
            </div>
            <div className="col-sm-5 mt-2">
              <div className="h4 card-font">Your Cart <span className="badge badge-secondary badge-pill ml-3">{this.props.cartQuantity}</span></div>
              <hr/>
              <div className="h6">Subtotal:<span className="float-right">$ {this.calculateSubTotal()}</span></div>
              <div className="h6">Shipping: <span className="float-right">FREE</span></div>
              <div className="h6 description-font mb-4">Tax:<span className="float-right">$ {(this.calculateSubTotal() * 0.0725).toFixed(2)}</span></div>
              <hr/>
              <span className="h4 card-font mb-4 text-orange">TOTAL : <span className="float-right">$ {(this.calculateSubTotal() * 1.0725).toFixed(2)}</span></span>
              <CheckoutConfirmationModal
                placeOrder={this.props.placeOrder}
                orderTotal={(this.calculateSubTotal() * 1.0725).toFixed(2)}
                cartQuantity={this.props.cartQuantity}
                cart={this.props.cart}/>
              <button type="button" className="btn btn-secondary border border-success btn-block mt-2 mb-2" onClick={this.goToCart}>BACK TO CART</button>
              <ul className="list-group mb-3">
                {this.props.cart.map(cartItem => {
                  return <ListCartItems
                    key={cartItem.id}
                    cartItem={cartItem}/>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      // </div>

    );
  }
}

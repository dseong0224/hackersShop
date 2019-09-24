import React from 'react';
import CheckoutConfirmationModal from './checkout-form-confirmation-modal';
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

              {/* <div className="mb-2 card">
                <div className="h3 card-font text-white card-header" style="background-color: rgb(51, 51, 51); border-color: rgb(51, 51, 51);">1. SHIPPING</div>
                <div className="card-body"><p className="card-text">Shipping + Billing Address <i className="fas fa-question-circle pointer-hover text-warning" href="#" data-tip="true" data-for="tooltip1" currentitem="false"></i></p>
                  <div className="__react_component_tooltip place-right type-dark " id="tooltip1" data-id="tooltip"><span className="font-weight-bold">Note: This is a demo please do not input actual information</span></div>
                  <div className="mb-1 input-group"><input placeholder="Name" name="name" type="text" className="is-valid form-control"/><div className="invalid-feedback">Please enter your name.</div>
                  </div>
                  <div className="mb-1 input-group"><input placeholder="Shipping Address" name="address" type="text" className="is-valid form-control"/><div className="invalid-feedback">Please enter your address.</div>
                  </div>
                  <div className="mb-1 input-group"><input placeholder="E-Mail" name="email" type="text" className="is-valid form-control"/>
                    <div className="invalid-feedback">Please enter a valid e-mail address.</div>
                  </div>
                  <div className="input-group"><input placeholder="Phone Number" name="phone" type="text" className="is-valid form-control"/>
                    <div className="invalid-feedback">Please enter a valid 10-digit phone number.</div>
                  </div>
                </div>
              </div> */}

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

            <div className="col-sm-5">
              <div className="h4 card-font">Your Cart <span className="badge badge-secondary badge-pill ml-3">{this.props.cartQuantity}</span></div>
              <hr/>
              <div className="h6">Subtotal:<span className="float-right">$ {this.calculateSubTotal()}</span></div>
              <div className="h6">Shipping: <span className="float-right">FREE</span></div>
              <div className="h6 description-font mb-4">Tax:<span className="float-right">$ {(this.calculateSubTotal() * 0.0725).toFixed(2)}</span></div>
              <hr/>
              <span className="h4 card-font mb-4 text-orange">TOTAL : <span className="float-right">$ {(this.calculateSubTotal() * 1.0725).toFixed(2)}</span></span>
              <CheckoutConfirmationModal placeOrder={this.props.placeOrder} orderTotal={(this.calculateSubTotal() * 1.0725).toFixed(2)} cartQuantity={this.props.cartQuantity}/>
              <button type="button" className="btn btn-secondary border border-success btn-block mt-2 mb-2" onClick={this.goToCart}>BACK TO CART</button>
              <ul className="list-group mb-3">
                {this.props.cart.map(cartItem => {
                  return <ListCartItems key={cartItem.id} cartItem={cartItem}/>;
                })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

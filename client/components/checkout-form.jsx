import React from 'react';
import CheckoutConfirmationModal from './checkout-form-confirmation-modal';
import ListCartItems from './checkout-summary';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      creditCardNumber: '',
      expDate: '',
      ccv: ''
    };
    this.placeOrder = this.placeOrder.bind(this);
    this.goToCart = this.goToCart.bind(this);
    this.calculateSubTotal = this.calculateSubTotal.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handleCreditCardNumberChange = this.handleCreditCardNumberChange.bind(this);
    this.handleExpDateChange = this.handleExpDateChange.bind(this);
    this.handleCvvChange = this.handleCvvChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAddressChange(event) {
    this.setState({ address: event.target.value });
  }

  handleCreditCardNumberChange(event) {
    this.setState({ creditCardNumber: event.target.value });
  }

  handleExpDateChange(event) {
    this.setState({ expDate: event.target.value });
  }

  handleCvvChange(event) {
    this.setState({ cvv: event.target.value });
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

    const { name, address, creditCardNumber, expDate, cvv } = this.state;
    let isEnabled = false;
    if (name && address && creditCardNumber && expDate && cvv) {
      isEnabled = name.length > 0 && address.length > 0 && creditCardNumber.length === 16 && cvv.length > 2 && expDate !== null;
    }

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
                  <input placeholder="Name" name="name" type="text" className="form-control" onChange={this.handleNameChange}/>
                  <input placeholder="Shipping Address" name="address" type="text" className="form-control" onChange={this.handleAddressChange}/>
                </div>
              </div>
              <div className="mb-2">
                <div className="h4 card-header">Payment</div>
                <div className="card-body">
                  <p className="card-text"> Credit Card </p>
                  <input className="mb-1 form-control" id="cc-number" placeholder="1234567891011121" name="creditCardNumber" type="text" pattern="\d*" maxLength="16" onChange={this.handleCreditCardNumberChange}/>
                  <div className="mb-1 input-group form-control"><input placeholder="Exp. Date" name="expDate" type="month" onChange={this.handleExpDateChange}/></div>
                  <input className="mb-1 form-control" placeholder="cvv" name="cvv" type="text" pattern="\d*" maxLength="4" onChange={this.handleCvvChange}/>
                </div>
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
                cart={this.props.cart}
                emptyCart={this.props.emptyCart}
                disabled={!isEnabled}/>

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

    );
  }
}

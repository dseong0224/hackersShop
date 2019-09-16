import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CartSummary extends React.Component {
  constructor(props) {
    super(props);
    this.listCartItems = this.listCartItems.bind(this);
    this.goToMainPage = this.goToMainPage.bind(this);
    this.viewCheckoutForm = this.viewCheckoutForm.bind(this);
    this.calculateSubTotal = this.calculateSubTotal.bind(this);
  }

  listCartItems() {
    if (this.props.cart.length === 0) {
      return <h1>CART IS EMPTY...</h1>;
    }
    return (this.props.cart.map(cartItem => {
      return (
        <CartSummaryItem key={cartItem.id}
          data={cartItem}
          viewCartItemDetails={this.props.setPage}
          getCartItems={this.props.getCartItems}
          removeItemFromCart={this.props.removeItemFromCart}
          cartQuantity={this.props.cartQuantity}
          updateCart={this.props.updateCart}/>
      );
    }));
  }
  goToMainPage() {
    this.props.setPage('catalog', {});
  }
  viewCheckoutForm() {
    this.props.setPage('checkout', {});
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
    if (this.props.page === 'cart') {
      return (
        <div className="mt-4 mb-4 container">
          <div className="row">
            <div className="col-sm-7">
              <div className="h3">Cart <span className="h6 text-muted">{this.props.cartQuantity} item(s)</span></div>
              <div className="container">
                <div className="mt-3 mb-3">
                  <hr/>
                  {this.listCartItems()}
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <h3> Summary </h3><hr/>
              <div className="h6">Subtotal: <span className="float-right">${this.calculateSubTotal()}</span></div>
              <div className="h6"> Shipping: <span className="float-right">FREE</span></div>
              <div className="h6 mb-4">Tax: <span className="float-right">${(this.calculateSubTotal() * 0.15).toFixed(2)}</span></div>
              <hr/>
              <div className="h5 mb-4">TOTAL : <span className="float-right">${(this.calculateSubTotal() * 1.15).toFixed(2)}</span></div>
              <button type="button" className="btn btn-light border border-success btn-block" onClick={this.goToMainPage}>BACK TO SHOPPING</button>
              <button type="button" className="btn btn-light border border-success btn-block" onClick={this.viewCheckoutForm}>CHECKOUT</button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>
          Page Loading...
        </div>
      </div>
    );
  }

}

// function subTotalPrice(cartItems) {
//   let priceTotal = 0;
//   for (var priceIndex = 0; priceIndex < cartItems.length; priceIndex++) {
//     priceTotal += parseFloat(cartItems[priceIndex].price);
//   }
//   return '$' + (priceTotal / 100).toFixed(2);
// }
// function totalTax(cartItems) {
//   let priceTotal = 0;
//   for (var priceIndex = 0; priceIndex < cartItems.length; priceIndex++) {
//     priceTotal += parseFloat(cartItems[priceIndex].price);
//   }
//   return '$' + (priceTotal * 0.9 / 1000).toFixed(2);
// }
// function totalPrice(cartItems) {
//   let priceTotal = 0;
//   for (var priceIndex = 0; priceIndex < cartItems.length; priceIndex++) {
//     priceTotal += parseFloat(cartItems[priceIndex].price);
//   }
//   return '$' + (priceTotal * 1.09 / 100).toFixed(2);
// }

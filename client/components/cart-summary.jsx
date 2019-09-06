import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  function listCartItems() {
    if (props.cartStateProps.length === 0) {
      // if(props.getCartItems.length === 0){
      return <h1>CART IS EMPTY...</h1>;
    }
    return (props.cartStateProps.map(cartItem => {
      return <CartSummaryItem key={cartItem.id} data={cartItem} viewCartItemDetails={props.updateViewState}/>;
    }));
  }
  function resetSetView() {
    props.updateViewState('catalog', {});
  }
  function viewCheckoutForm() {
    props.updateViewState('checkout', {});
  }
  if (props.nameStateProps === 'cart') {
    return (
      <div className="mt-4 mb-4 container">
        <div className="row">
          <div className="col-sm-7">
            <div className="h3">CART <span className="h6 text-muted">19 item(s)</span></div>
            <div className="container">
              <div className="mt-3 mb-3">
                <hr/>
                {listCartItems()}
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <h3> Summary </h3><hr/>
            <div className="h6">Subtotal: <span className="float-right">{subTotalPrice(props.cartStateProps)}</span></div>
            <div className="h6"> Shipping: <span className="float-right">FREE</span></div>
            <div className="h6 mb-4">Tax: <span className="float-right">{totalTax(props.cartStateProps)}</span></div>
            <hr/>
            <div className="h5 mb-4">TOTAL : <span className="float-right">{totalPrice(props.cartStateProps)}</span></div>
            <button type="button" className="btn btn-light border border-success btn-block" onClick={resetSetView} style={{ cursor: 'pointer' }}>BACK TO SHOPPING</button>
            <button type="button" className="btn btn-light border border-success btn-block" onClick={viewCheckoutForm} style={{ cursor: 'pointer' }}>CHECKOUT</button>
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

function subTotalPrice(cartItems) {
  let priceTotal = 0;
  for (var priceIndex = 0; priceIndex < cartItems.length; priceIndex++) {
    priceTotal += parseFloat(cartItems[priceIndex].price);
  }
  return '$' + (priceTotal / 100).toFixed(2);
}
function totalTax(cartItems) {
  let priceTotal = 0;
  for (var priceIndex = 0; priceIndex < cartItems.length; priceIndex++) {
    priceTotal += parseFloat(cartItems[priceIndex].price);
  }
  return '$' + (priceTotal * 0.9 / 1000).toFixed(2);
}
function totalPrice(cartItems) {
  let priceTotal = 0;
  for (var priceIndex = 0; priceIndex < cartItems.length; priceIndex++) {
    priceTotal += parseFloat(cartItems[priceIndex].price);
  }
  return '$' + (priceTotal * 1.09 / 100).toFixed(2);
}

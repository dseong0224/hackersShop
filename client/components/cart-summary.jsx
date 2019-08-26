import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  function listCartItems() {
    if (props.cartStateProps.length === 0) {
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
      <div>
        <div>
          <div>
            <div>
            </div>
          </div>
        </div>
        <div role="main">
          <div className=" mx-auto text-center">
            <h3>Cart Summary</h3>
          </div>
          <div className="container">
            <div className="col">{listCartItems()}</div>
            <div className="col-12 col-sm-6 col-md-8">
              Total Amount: {totalPrice(props.cartStateProps)}
            </div>
            <div className="row">
              <button type="button" className="col btn btn-light border border-success" onClick={viewCheckoutForm}>Checkout</button>
              <div className="col"></div>
              <button type="button" className="col btn btn-light border border-success" onClick={resetSetView} style={{ cursor: 'pointer' }}>
               Back to Shopping
              </button>
            </div>
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

function totalPrice(cartItems) {
  let priceTotal = 0;
  for (var priceIndex = 0; priceIndex < cartItems.length; priceIndex++) {
    priceTotal += parseFloat(cartItems[priceIndex].price);
  }
  return '$' + (priceTotal / 100).toFixed(2);
}

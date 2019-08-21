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
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <button onClick={resetSetView} checked>Back to Catalog</button>
              </label>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div role="main">
          <div className="container">
            <div className="col">
              {listCartItems()}
                        Total: {totalPrice(props.cartStateProps)}
              <button onClick={viewCheckoutForm}>Checkout</button>
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

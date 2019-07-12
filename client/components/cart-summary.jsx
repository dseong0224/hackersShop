import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  function listCartItems() {
    return (props.cartStateProps.map(cartItem => <CartSummaryItem key={cartItem.id} data={cartItem} viewCartItemDetails={props.updateViewState}/>));
  }
  function resetSetView() {
    props.updateViewState('catalog', {});
  }
  function totalPrice() {
    const itemPriceArray = props.cartStateProps.map(cartItem => cartItem.price);
    let priceTotal = 0;
    for (var priceIndex = 0; priceIndex < itemPriceArray.length; priceIndex++) {
      priceTotal += itemPriceArray[priceIndex];
    }
    return '$' + (priceTotal / 100).toFixed(2);
  }
  if (props.nameStateProps === 'cart') {
    return (
      <div>
        <div>
          <div>
            <div className="btn-group btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-secondary active">
                <a onClick={resetSetView} checked>Back to Catalog</a>
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
              Total: {totalPrice()}
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

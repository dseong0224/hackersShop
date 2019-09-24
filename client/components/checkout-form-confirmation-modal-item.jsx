import React from 'react';
// import productQuantity from './product-quantity';

export default class CheckoutModalItem extends React.Component {
  render() {
    return (
      <div className="mt-3 mb-3"><hr/>
        <div className="row align-items-center mt-1 mb-1">
          <img src="./media/3-1.png" alt="" className="col-sm-5 mx-auto"/>
          <div className="col-sm-7">
            <div className="h6 card-font">product.name</div>
            <div className="h6 description-font text-muted">product.price</div>
            <div className="h6">Quantity</div>
          </div>
        </div>
      </div>
    );
  }
}

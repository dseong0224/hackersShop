import React from 'react';

export default class CheckoutModalDetail extends React.Component {
  // constructor(){

  // }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card-font">1. SHIPPING</div>
            <div className="description-font">ad</div>
            <div className="description-font">asd</div>
            <div className="description-font">ad@ssd.fadf</div>
            <div className="description-font">12123123123</div>
          </div>
          <div className="col">
            <div className="card-font">2. BILLING</div>
            <div className="description-font">CC #: 1231231231231231</div>
            <div className="description-font">Exp.: 12/12</div>
            <div className="description-font">CVV: 212</div>
          </div>
        </div>
      </div>
    );
  }
}

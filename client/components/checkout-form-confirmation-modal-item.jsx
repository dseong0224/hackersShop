import React from 'react';

export default class CheckoutModalItem extends React.Component {
  render() {
    return (
      <div className="mt-3 mb-3"><hr/>
        <div className="row align-items-center mt-1 mb-1">
          <img src="./media/3-1.png" alt="" className="col-sm-5 mx-auto"/>
          <div className="col-sm-7">
            <div className="h6 card-font">Air Jordan I</div>
            <div className="h6 card-font text-muted">Sail/Gym Red</div>
            <div className="h6 description-font text-muted">$160.00</div>
            <div className="h6">Quantity: 2</div>
          </div>
        </div>
      </div>
    );
  }
}

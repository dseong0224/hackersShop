import React from 'react';

export default class RemoveProductConfirmationModal extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button type="button" className="btn btn-light mr-1 ml-1 mb-2" data-toggle="modal" data-target="#exampleModalCenter" >
          Remove
        </button>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Remove Item
                </h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Item:
                </h5>
                <div className="row align-items-center mt-1 mb-1">
                  <img src={this.props.image} alt={this.props.name} className="col-sm-5 mx-auto"/>
                  <div className="col-sm-7 card-font">
                    <div className="h5">{this.props.name}</div>
                    <div className="h6 description-font text-muted">${(this.props.price / 100).toFixed(2)}</div>
                    <div className="h5 mb-3">Quantity: {this.props.quantity}</div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="mr-1 ml-1 mb-2 btn btn-outline-secondary" data-dismiss="modal">Go To Cart</button>
                <button type="button" className="mr-1 ml-1 mb-2 btn btn-outline-secondary" data-dismiss="modal" onClick={this.props.removeItemFromCart}>Remove</button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

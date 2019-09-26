import React from 'react';

export default class PaymentInfoValidation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creditCardNumber: '' };
    this.handleChange = this.handleChange.bind(this);
    this.render = this.render.bind(this);
  }
  handleChange(event) {
    this.setState({ creditCardNumber: event.target.value });
    if (event.target.value.length !== 16) {
      this.validation = false;
    } else {
      this.validation = true;
    }
  }

  render() {
    if (this.validation === true) {
      return (
        <div className="card-body">
          <p className="card-text"> Credit Card </p>
          <div className="mb-1 input-group"><input id="cc-number" placeholder="1234567891011121" name="creditCard" type="number" className="form-control" onChange={this.handleChange}/></div>
          <div className="mb-1 input-group"><input placeholder="Exp. Date" type="number" className="form-control"/></div>
          <div className="mb-1 input-group"><input placeholder="CVV" type="number" className="form-control"/></div>
          <p className="text-success">Valid Credit Card Number</p>
        </div>
      );
    }
    return (
      <div className="card-body">
        <p className="card-text"> Credit Card </p>
        <div className="mb-1 input-group"><input id="cc-number" placeholder="1234567891011121" name="creditCard" type="number" className="form-control" onChange={this.handleChange}/></div>
        <div className="mb-1 input-group"><input placeholder="Exp. Date" type="number" className="form-control"/></div>
        <div className="mb-1 input-group"><input placeholder="CVV" type="number" className="form-control"/></div>
        <p className="text-danger">credit card number must be 16 digits</p>

      </div>);
  }
}

import React from 'react';

export default class productQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment();
  }

  decrement() {
    this.props.decrement();
  }

  render() {
    return (
      <div className="quantity-input mb-3">
        <div className="h5 mb-1">Quantity:</div>
        <ion-icon name="remove-circle-outline" onClick={this.decrement}></ion-icon>
        1
        <ion-icon name="add-circle-outline" onClick={this.increment}></ion-icon>
      </div>
    );
  }
}

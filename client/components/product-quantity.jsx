import React from 'react';

export default class productQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartQuantity: this.props.cartQuantity
    };
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.increment();
  }

  decrement() {
    this.props.decrement();
  }

  handleChange(event) {
    this.setState({ cartQuantity: event.target.value });
  }

  render() {
    return (
      <div className="quantity-input mb-3">
        <div className="h5 mb-1">Quantity:</div>
        <ion-icon name="remove-circle-outline" style={{ cursor: 'pointer' }} onClick={this.decrement}>&mdash;</ion-icon>
        <input className="quantity-input__screen text-center" type="text" value={this.props.cartQuantity} onChange={this.handleChange} style={{ width: '20%' }}/>
        <ion-icon name="add-circle-outline" style={{ cursor: 'pointer' }} onClick={this.increment}>&#xff0b;</ion-icon>
      </div>
    );
  }
}

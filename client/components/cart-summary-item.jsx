import React from 'react';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartQuantity: 0
    };
    this.viewDetails = this.viewDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount() {
    this.getProductQuantity(this.props.data.id);
  }

  viewDetails() {
    this.props.viewCartItemDetails('details', { id: this.props.data.id });
  }

  getProductQuantity(id) {
    fetch('/api/cart.php?id=' + id)
      .then(response => response.json())
      .then(cartQuantity => this.setState({ cartQuantity: cartQuantity[0].count }));
  }

  handleChange(event) {
    this.setState({ cartQuantity: event.target.value });
  }

  increment() {
    let cartQuantity = this.state.cartQuantity;
    let newQuantity = cartQuantity++;
    this.setState({
      cartQuantity: newQuantity
    });
  }

  decrement() {
    let cartQuantity = this.state.cartQuantity;
    let newQuantity = cartQuantity++;
    this.setState({
      cartQuantity: newQuantity
    });
  }

  updateCart() {
    this.props.updateCart(this.props.data, this.state.cartQuantity);
    this.props.getCartItems();
  }

  render() {
    return (
      <div className="row align-items-center mt-1 mb-1">
        <img style={{ 'maxWidth': '200px' }} src={this.props.data.image} className="card-img" alt={this.props.data.name} type="button" onClick={this.viewDetails}/>
        <div className="col-sm-7">
          <h5 className="card-title" type="button" onClick={this.viewDetails}>{this.props.data.name}</h5>
          <div className="h5 description-font text-muted">${(this.props.data.price / 100).toFixed(2)}</div>
          <div className="h5 mb-3 noselect">Quantity:
            <i className="fas fa-minus-square pointer-hover mr-2"></i>
            <input className="quantity-input__screen text-center" type="number" value={this.state.cartQuantity} onChange={this.handleChange} style={{ width: '20%' }}/>
            <i className="fas fa-plus-square pointer-hover ml-2"></i>
          </div>
          <div>
            <button type="button" className="btn btn-light mr-1 ml-1 mb-2" role="button" onClick={this.updateCart}>Edit</button>
            <button type="button" className="btn btn-light mr-1 ml-1 mb-2" role="button">Remove</button>
          </div>
        </div>
      </div>
    );
  }

}

import React from 'react';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartQuantity: 0
    };
    this.viewProducts = this.viewProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateCart = this.updateCart.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.getProductQuantity(this.props.data.id);
  }

  viewProducts() {
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

  updateCart() {
    this.props.updateCart(this.props.data, this.state.cartQuantity);
    setTimeout(() => {
      this.props.getCartItems();
    }, 100);
  }

  remove() {
    let product = this.props.data;
    this.props.remove(product);
    setTimeout(() => {
      this.props.getCartItems();
    }, 100);
  }

  render() {
    return (
      <div className="row align-items-center mt-1 mb-1">
        <img style={{ 'maxWidth': '200px', cursor: 'pointer' }} src={this.props.data.image} className="card-img" alt={this.props.data.name} onClick={this.viewProducts}/>
        <div className="col-sm-7">
          <h6 onClick={this.viewProducts} style={{ cursor: 'pointer' }}>{this.props.data.name}</h6>
          <div className=" description-font text-muted">${(this.props.data.price / 100).toFixed(2)}</div>
          <div className="mb-3 noselect">Quantity:
            <input className="quantity-input__screen text-center ml-1 mr-1" type="number" value={this.state.cartQuantity} onChange={this.handleChange} style={{ width: '20%' }}/>
          </div>
          <div>
            <button type="button" className="btn btn-light mr-1 ml-1 mb-2" role="button" onClick={this.updateCart}>Edit</button>
            <button type="button" className="btn btn-light mr-1 ml-1 mb-2" role="button" onClick={this.remove}>Remove</button>
          </div>
        </div>
      </div>
    );
  }

}

import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.navHome = this.navHome.bind(this);
  }
  navHome() {
    this.props.updateViewState('catalog', {});
  }
  render() {
    return (
      <header>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About <strong>hacker/&apos;s_Shop</strong></h4>
                <p className="text-white">One Stop Shop for Hackers</p>
                <p className="text-white">We sell keyboards, mice and more computer related tools and gears that will help you code, hack, program, develop, engineer with comfort</p>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark shadow-sm" style={{ backgroundColor: 'green' }}>
          <div className="container" style={{ maxWidth: '100%' }}>
            <div className="row text-white">
              <a onClick={this.navHome} className="navbar-brand d-flex align-items-center" style={{ cursor: 'pointer' }}>
                <img src="https://icon-library.net//images/icon-hacker/icon-hacker-12.jpg" width="40" height="40" />
                <strong>hacker/&apos;s_Shop</strong>
              </a>
            </div>
            <div className="row">
              <div className="row" onClick={() => this.props.updateViewState('cart', {})} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
                <div className="text-white">Cart: {this.props.numberOfItems}</div>
              </div>
              <div className="col"></div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

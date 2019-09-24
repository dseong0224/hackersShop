import React from 'react';

export default function ListCartItems(props) {

  // function calculateSubTotal() {
  //   let cart = props.cart;
  //   let subTotal = 0;
  //   for (let cartItemIndex = 0; cartItemIndex < cart.length; cartItemIndex++) {
  //     subTotal += cart[cartItemIndex].count * cart[cartItemIndex].price;
  //   }
  //   return (subTotal / 100).toFixed(2);
  // }

  return (

    <li className="list-group-item d-flex justify-content-between lh-condensed" >
      <div>
        <h6 className="my-0">{props.cartItem.name}</h6>
        <span className="badge badge-secondary badge-pill">{props.cartItem.count}</span>
      </div>
      <span className="text-muted">${(props.cartItem.price / 100).toFixed(2)}</span>
    </li>
  );
}

// { /* <div class="mt-3 mb-3"><hr/>
//                     <div class="row align-items-center mt-1 mb-1"><img src="./media/3-1.png" alt="" class="col-sm-5 mx-auto"/>
//                     <div class="col-sm-7">
//                       <div class="h6 card-font">Air Jordan I</div>
//                       <div class="h6 card-font text-muted">Sail/Gym Red</div>
//                       <div class="h6 description-font text-muted">$160.00</div>
//                       <div class="h6">Quantity: 2</div>
//                       </div>
//                       </div>
//                       </div>
//                       <div class="mt-3 mb-3"><hr/>
//                       <div class="row align-items-center mt-1 mb-1">
//                         <img src="./media/7-1.png" alt="" class="col-sm-5 mx-auto"/>
//                         <div class="col-sm-7">
//                           <div class="h6 card-font">Adapt BB</div>
//                           <div class="h6 card-font text-muted">Wolf Grey</div>
//                           <div class="h6 description-font text-muted">$350.00</div>
//                           <div class="h6">Quantity: 12</div>
//                           </div>
//                           </div>
//                           </div> */ }

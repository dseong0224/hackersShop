import React from 'react';

export default function ProductDetailCarouselImgs(props) {
  return (
    <div className="carousel-item">
      <img width="90%" src={props.imageSrc} alt={props.productName} className="card-img"/>
      {/* {console.log(props.imageSrc)} */}
    </div>
  );
}

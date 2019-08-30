import React from 'react';

export default function ProductDetailCarouselImgs(props) {
  const carouselCss = {
    width: '90%'
  };
  return (
    <div className="carousel-item text-center">
      <img style={carouselCss} src={props.imageSrc} alt={props.name}/>
      {/* {console.log(props.imageSrc)} */}
    </div>
  );
}

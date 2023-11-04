import React from "react";
// import ProductDetails from './ProductDetails'

function Product(props) {
  return (
      <div className="pdescription">
        <h2>{props.name}</h2>
        <h5>{props.about}</h5>
        <h3>{props.conclusion}</h3>
      </div>
  );
}

export default Product;

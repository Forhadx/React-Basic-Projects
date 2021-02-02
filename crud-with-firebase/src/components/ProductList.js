import React from "react";

import "./productList.css";

const ProductList = React.memo((props) => {
  console.log("list..");
  return (
    <div className="product-list">
      <h2>All Product List</h2>
      {props.products.map((prod) => (
        <div key={prod.id} className="single-product">
          <div>{prod.time}</div>
          <div>{prod.name}</div>
          <div>{prod.price}tk</div>
          <div>
            <button
              className="edit"
              onClick={() => props.productUpdate(prod.id)}
            >
              edit
            </button>
            <button
              className="delete"
              onClick={() => props.prodDelete(prod.id)}
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
});

export default ProductList;

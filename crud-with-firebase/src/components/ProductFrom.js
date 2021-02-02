import React, { useEffect, useState } from "react";

import './productForm.css';

const ProductFrom =React.memo(props => {
  console.log('form...');
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const { product, isEdit } = props;

  useEffect(() => {
    if (isEdit) {
      setName(product.name);
      setPrice(product.price);
    }
  }, [isEdit, product]);

  const addProductFromHandler = (event) => {
    event.preventDefault();
    if (isEdit) {
      props.editProductHandler({
        id: product.id,
        time: new Date().toLocaleString(),
        name: name,
        price: price,
      });
    } else {
      props.addProductsHandler({
        time: new Date().toLocaleString(),
        name: name,
        price: price,
      });
    }

    setName("");
    setPrice("");
  };

  return (
    <div>
      <form onSubmit={addProductFromHandler} className="productForm">
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
});

export default ProductFrom;

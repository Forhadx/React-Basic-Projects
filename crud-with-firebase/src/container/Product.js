import React, { useCallback, useEffect, useState } from "react";

import axios from "../axios";

import ProductFrom from "../components/ProductFrom";
import ProductList from "../components/ProductList";

const Product = () => {
  const [productsInfo, setProductsInfo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    console.log("useEffect...");
    axios
    .get('/products.json')
      .then((response) => {
        const fetchProducts = [];
        for (let key in response.data) {
          fetchProducts.push({
            ...response.data[key],
            id: key,
          });
        }
        console.log(fetchProducts);

        setProductsInfo(fetchProducts);
      });
  }, [isEdit]);

  const addProductsHandler = useCallback((data) => {
    axios.post("/products.json", data).then((response) => {
      setProductsInfo((oldProducts) => [
        ...oldProducts,
        { id: response.data.name, ...data },
      ]);
    });
  }, []);

  const removeProductHandler = useCallback((pId) => {
    axios.delete(`/products/${pId}.json`).then((response) => {
      setProductsInfo((oldProducts) => oldProducts.filter((p) => p.id !== pId));
    });
  }, []);

  const findEditProductHandler = (pId) => {
    setIsEdit(true);
    const product = productsInfo.find((x) => x.id === pId);
    setEditProduct(product);
  };

  const editProductHandler = useCallback((data) => {
    axios.put(`/products/${data.id}.json`, data).then((response) => {
      setIsEdit(false);
    });
  }, []);

  return (
    <React.Fragment>
      <ProductFrom
        addProductsHandler={addProductsHandler}
        editProductHandler={editProductHandler}
        isEdit={isEdit}
        product={editProduct}
      />

      <ProductList
        products={productsInfo}
        prodDelete={removeProductHandler}
        productUpdate={findEditProductHandler}
      />
    </React.Fragment>
  );
};

export default Product;

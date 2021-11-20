import React from "react";
import { useNavigate, useParams } from "react-router";

const Product = () => {
  const params = useParams();
  const navigate = useNavigate();

  const twoPageBeforeHandler = () => {
    navigate(-2);
  };

  const prevPageHandler = () => {
    /*
       0 = stay same page
       -1 = go back page
       -2 = go back 2 page
       -3, -4 ... 
    */
    navigate(-1);
  };

  return (
    <div>
      <h4>Single product {params.id}</h4>
      <hr />
      <h3 onClick={prevPageHandler}>Goto-back 1 page</h3>
      <h3 onClick={twoPageBeforeHandler}>Goto-back 2 page</h3>
    </div>
  );
};

export default Product;

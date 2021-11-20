import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  //  useHistory not support R.v6
  const navigate = useNavigate();

  // console.log(navigate); // no obj shown

  const clickHandler = () => {
    // this is work
    // navigate("/products/4");     // this is navigate -2, -3... pages

    // this is replace the route
    navigate("/products/4", { replace: true }); // this is not navigate -2 page but -1 navigate is working
  };

  return (
    <div className="products">
      <Link to="/products/1">prod one</Link>
      <Link to="/products/2">prod two</Link>
      <Link to="/products/3">prod three</Link>
      <h3 onClick={clickHandler}>prod four</h3>
    </div>
  );
};

export default Products;

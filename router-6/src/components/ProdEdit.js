import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProdEdit = () => {
  return (
    <div>
      <h4>You can edit</h4>
      <Link to="/products/edit/load">click</Link>

      {/* another example of nested route. 
          outlet define the nested route which 
          can any place in this component */}
      <Outlet />
    </div>
  );
};

export default ProdEdit;

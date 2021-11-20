import React from "react";
import { Routes, Route, Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h4>welcome Home</h4>
      <Link to="/home/open">click</Link>

      {/* 
         -> /home/* , * must be use in parent
         -> /home/open full should not use, only child param use here
         -> below structure should maintain
      */}
      <Routes>
        <Route path="open" element={<p>More line for more welcome</p>} />
      </Routes>
    </div>
  );
};

export default Home;

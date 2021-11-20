import React from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import Product from "./components/Product";
import ProdEdit from "./components/ProdEdit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* this is use as redirect | <Navigate replace to="/home" /> */}
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home/*" element={<Home />} />

        {/* (*) give anything have after /products/* then this page shown.. without the /:id page */}
        <Route path="/products/*" element={<Products />} />

        {/* edit must be up from the id  */}
        <Route path="/products/edit" element={<ProdEdit />}>
          <Route
            path="/products/edit/load"
            element={<p>edit here brother </p>}
          />
        </Route>

        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./Sidebar";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <Route path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
    return (
        <div className="App">
            <div className="sidebar-shadow"></div>
            <Header />
            <div className="combine-main">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
};

export default App;

import React from "react";
import BottomTable from "./BottomTable/BottomTable";
import Chart from "./Chart/Chart";
import DashBoard from "./Dashboard/DashBoard";
import "./Main.scss";
import RightTable from "./RightTable/RightTable";

const Main = () => {
    return (
        <div className="main">
            <div className="main_dashboard">
                <DashBoard />
            </div>
            <div className="main_chart">
                <Chart />
            </div>
            <div className="main_table-right">
                <RightTable />
            </div>
            <div className="main_table-bottom">
                <BottomTable />
            </div>
        </div>
    );
};

export default Main;

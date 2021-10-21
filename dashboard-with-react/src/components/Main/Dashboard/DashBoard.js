import React from "react";
import "./Dashboard.scss";
import { FiMoreVertical } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import { CgOptions } from "react-icons/cg";

const DashBoard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__heading">
                <h1>DashBoard</h1>
                <div className="dashboard__heading--filter">
                    <span>Filters</span>
                    <CgOptions />
                </div>
            </div>
            <div className="dashboard__summary">
                <div className="dashboard__summary--box green">
                    <div className="dashboard__summary--box-icons">
                        <span>
                            <GiBackwardTime />
                        </span>
                        <FiMoreVertical />
                    </div>
                    <h2>$1200</h2>
                    <p>
                        <span>45%</span> This week
                    </p>
                </div>
                <div className="dashboard__summary--box blue">
                    <div className="dashboard__summary--box-icons">
                        <span>
                            <GiBackwardTime />
                        </span>
                        <FiMoreVertical />
                    </div>
                    <h2>$232,40</h2>
                    <p>
                        <span>35%</span> This week
                    </p>
                </div>
                <div className="dashboard__summary--box red">
                    <div className="dashboard__summary--box-icons">
                        <span>
                            <GiBackwardTime />
                        </span>
                        <FiMoreVertical />
                    </div>
                    <h2>$600</h2>
                    <p>
                        <span>21%</span> This week
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;

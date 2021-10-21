import React from "react";
import "./BottomTable.scss";
import { BsArrowUpLeft, BsArrowDownRight } from "react-icons/bs";

const BottomTable = () => {
    return (
        <div className="bottom-table">
            <h1>Recent Activites</h1>
            <ul>
                <li>
                    <div className="list-icon green">
                        <BsArrowUpLeft />
                    </div>
                    <span>Bitcoin</span>
                    <span>10:42:23 AM</span>
                    <span>+1545,00</span>
                    <span>Completed</span>
                </li>
                <li>
                    <div className="list-icon blue">
                        <BsArrowDownRight />
                    </div>
                    <span>Ethereum</span>
                    <span>10:42:23 AM</span>
                    <span>+1545,00</span>
                    <span>Completed</span>
                </li>
                <li>
                    <div className="list-icon red">
                        <BsArrowDownRight />
                    </div>
                    <span>Binance</span>
                    <span>10:42:23 AM</span>
                    <span>+1545,00</span>
                    <span>Completed</span>
                </li>
            </ul>
        </div>
    );
};

export default BottomTable;

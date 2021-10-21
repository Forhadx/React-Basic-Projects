import React from "react";
import "./Sidebar.scss";
import { AiOutlineDashboard, AiOutlineDollarCircle } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { GiBackwardTime } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";
import { RiWallet3Line, RiExchangeLine } from "react-icons/ri";
import { GrMoney } from "react-icons/gr";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__links">
                <div className="sidebar__links-link">
                    <span>
                        <AiOutlineDashboard />
                    </span>
                    <p>DashBoard</p>
                </div>
                <div className="sidebar__links-link">
                    <span>
                        <RiWallet3Line />
                    </span>
                    <p>My Wallet</p>
                </div>
                <div className="sidebar__links-link">
                    <span>
                        <GrMoney />
                    </span>
                    <p>Transaction</p>
                </div>
                <div className="sidebar__links-link">
                    <span>
                        <AiOutlineDollarCircle />
                    </span>
                    <p>Crypto</p>
                </div>
                <div className="sidebar__links-link">
                    <span>
                        <RiExchangeLine />
                    </span>
                    <p>Exchange</p>
                </div>
                <div className="sidebar__links-link">
                    <span>
                        <VscSettingsGear />
                    </span>
                    <p>Setting</p>
                </div>
            </div>

            <div className="sidebar__box">
                <div className="sidebar__box-icons">
                    <GiBackwardTime />
                    <span>
                        <FiMoreVertical />
                    </span>
                </div>
                <h2>History available</h2>
                <p>Check your weekly transaction reports</p>
            </div>
        </div>
    );
};

export default Sidebar;

import React from "react";
import "./Header.scss";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageDetail, BiSearch } from "react-icons/bi";
import { GoGift } from "react-icons/go";
import { RiSettings2Line } from "react-icons/ri";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">Walllet</div>
            <div className="header__icons">
                <form className="header__icons-form">
                    <button>
                        <BiSearch />
                    </button>
                    <input type="text" placeholder="Search" />
                </form>
                <div className="header__icons-icon">
                    <IoMdNotificationsOutline />
                </div>
                <div className="header__icons-icon">
                    <BiMessageDetail />
                </div>
                <div className="header__icons-icon">
                    <GoGift />
                </div>
                <div className="header__icons-icon">
                    <RiSettings2Line />
                </div>
            </div>
        </div>
    );
};

export default Header;

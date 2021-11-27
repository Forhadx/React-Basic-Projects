import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import MetisMenu from "@metismenu/react";
// import "metismenujs/dist/metismenujs.css";
import SideItems from "./sidebarItems.json";
import axios from "axios";
import ClassNames from "classnames";

const Sidebar = () => {
  const [flag, setFlag] = useState(false);
  const [mId, setMid] = useState("");

  const [sideItems, setSideItems] = useState([]);

  useEffect(() => {
    axios.get("./sidebarItems.json").then((res) => {
      console.log(res.data.menu);
      setSideItems([...res.data.menu]);
    });
  }, []);

  const menuItemHandler = (id) => {
    if (mId === id) {
      setFlag(!flag);
    } else {
      setFlag(true);
    }
    setMid(id);
  };

  return (
    <ul className="menuItems">
      {sideItems.map((pItem) => (
        <li key={pItem.id} onClick={() => menuItemHandler(pItem.id)}>
          <p> {pItem.title} </p>

          <div
            className={ClassNames("subMenu", {
              open: flag && mId === pItem.id,
              // close: flag && mId !== pItem.id,
            })}
          >
            <ul>
              {pItem.subMenu &&
                pItem.subMenu.map((sub) => (
                  <li
                    key={sub.id}
                    className={ClassNames("subMenulist", {
                      liOpen: flag && mId === pItem.id,
                    })}
                  >
                    {sub.title}
                  </li>
                ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;

/*
 {sideItems && (
        <MetisMenu>
          {sideItems.map((pItem) => (
            <>
              {pItem.subMenu ? (
                <li>
                  <Link to="#" className="has-arrow">
                    {pItem.title}
                  </Link>
                  <ul>
                    {pItem.subMenu &&
                      pItem.subMenu.map((sItem) => (
                        <li>
                          <NavLink to="/about">{sItem.title}</NavLink>
                        </li>
                      ))}
                  </ul>
                </li>
              ) : (
                <NavLink to="/" exact>
                  {pItem.title}
                </NavLink>
              )}
            </>
          ))}
        </MetisMenu>
      )}
*/

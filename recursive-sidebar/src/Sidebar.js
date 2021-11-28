import React, { useEffect, useLayoutEffect, useState } from "react";

import axios from "axios";
import ClassNames from "classnames";

const Sidebar = () => {
  const [flag, setFlag] = useState(false);
  const [mId, setMid] = useState("");

  const [sideItems, setSideItems] = useState([]);

  useLayoutEffect(() => {
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
            <ul
              className={ClassNames("subMenulist", {
                liOpen: flag && mId === pItem.id,
              })}
            >
              {pItem.subMenu &&
                pItem.subMenu.map((sub) => <li key={sub.id}>{sub.title}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;

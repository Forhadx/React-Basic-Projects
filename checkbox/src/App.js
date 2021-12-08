import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const userData = [
  { id: 1, name: "Rasel" },
  { id: 2, name: "Sabbir" },
  { id: 3, name: "Masum" },
  { id: 4, name: "Sajjad" },
  { id: 5, name: "Monir" },
  { id: 6, name: "Saddam" },
];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    console.log("name: ", name);
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.id.toString() === name ? { ...user, isChecked: checked } : user
      );
      console.log(tempUser);
      setUsers(tempUser);
    }
  };

  return (
    <div className="container my-4" style={{ width: "500px" }}>
      <form className="form w-100">
        <h3>Select Users</h3>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="allSelect"
            checked={
              users.filter((user) => user?.isChecked !== true).length < 1
            }
            onChange={handleChange}
          />
          <label className="form-check-label ms-2">All Select</label>
        </div>
        {users.map((user, index) => (
          <div className="form-check" key={index}>
            <input
              type="checkbox"
              className="form-check-input"
              name={user.id}
              checked={user?.isChecked || false}
              onChange={handleChange}
            />
            <label className="form-check-label ms-2">{user.name}</label>
          </div>
        ))}
      </form>
    </div>
  );
}

export default App;

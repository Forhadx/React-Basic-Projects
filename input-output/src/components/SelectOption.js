import React, { useState } from "react";

import "./input.css";

const InputField = () => {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const [val3, setVal3] = useState("");
  const options = [
    { value: "Audi-1", displayValue: "Audi" },
    { value: "BMW-1", displayValue: "BMW" },
    { value: "Citroen-1", displayValue: "Citroen" },
    { value: "Honda-1", displayValue: "Honda" },
    { value: "Jaguar-1", displayValue: "Jaguar" },
    { value: "Mercedes-1", displayValue: "Mercedes" },
    { value: "Toyota-1", displayValue: "Toyota" },
  ];

  let op = "";
  if (val3 === "all") {
    op = <p> {options.map((o) => o.value + " ")} </p>;
  } else {
    op = <p>{val3}</p>;
  }

  return (
    <div className="divField">
      <h3>Select </h3>
      <div className="selectOp">
        <div>
          <select value={val} onChange={(e) => setVal(e.target.value)}>
            {options.map((op) => (
              <option key={op.value} value={op.value}>
                {" "}
                {op.displayValue}{" "}
              </option>
            ))}
          </select>

          <p>{val}</p>
        </div>

        <div>
          <select value={val2} onChange={(e) => setVal2(e.target.value)}>
            <option>Select Car</option>
            {options.map((op) => (
              <option key={op.value} value={op.value}>
                {" "}
                {op.displayValue}{" "}
              </option>
            ))}
          </select>

          <p>{val2}</p>
        </div>

        <div>
          <select value={val3} onChange={(e) => setVal3(e.target.value)}>
            {options.map((op) => (
              <option key={op.value} value={op.value}>
                {" "}
                {op.displayValue}{" "}
              </option>
            ))}
            <option value="all">All car</option>
          </select>

          {op}
        </div>
      </div>
    </div>
  );
};

export default InputField;

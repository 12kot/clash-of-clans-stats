import React, { useState } from "react";
import "./RangeInput.scss";

const RangeInput = () => {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="slider">
      <input
        className="level"
        type="range"
        onChange={(e) => setValue(+e.target.value)}
      />
      <div className="values">
        <p className="first">1</p>
        <p className="value">{value}-100</p>
        <p className="second">10</p>
      </div>
    </div>
  );
};

export default RangeInput;

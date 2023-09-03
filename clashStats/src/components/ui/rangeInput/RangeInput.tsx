import React, { useState } from "react";
import "./RangeInput.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  min: number;
  max: number;
  minImg: string;
  maxImg?: string;
}

const RangeInput = ({ min, max, minImg, maxImg, ...restProps }: Props) => {
  const [value, setValue] = useState<number>(0);

  return (
    <div className="slider">
      <input
        className="level"
        type="range"
        onChange={(e) => setValue(+e.target.value)}
        min={min}
        max={max}
        {...restProps}
        defaultValue={0}
      />
      <div className="values">
        <img src={minImg} alt={min + ""} className="first" />
        <p className="value">
          {value}-{max}
        </p>
        {maxImg ? (
          <img src={maxImg} alt={max + ""} className="second" />
        ) : (
          <p className="second">{max}</p>
        )}
      </div>
    </div>
  );
};

export default RangeInput;

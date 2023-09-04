import React from "react";
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
  onChangeValue: (number: number) => void;
  currentValue: number;
}

const RangeInput = ({
  min,
  max,
  minImg,
  maxImg,
  onChangeValue,
  currentValue,
  ...restProps
}: Props) => {
  const onChange = (value: number) => {
    onChangeValue(value);
  };

  return (
    <div className="slider">
      <input
        className="level"
        type="range"
        onChange={(e) => onChange(+e.target.value)}
        min={min}
        max={max}
        value={currentValue}
        {...restProps}
      />
      <div className="values">
        <img src={minImg} alt={min + ""} className="first" />
        <p className="value">
          {currentValue}-{max}
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

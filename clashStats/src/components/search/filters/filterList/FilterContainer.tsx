import RangeInput from "components/ui/rangeInput/RangeInput";
import React from "react";
import styles from "./Filter.module.scss";

type Props = {
  min: number;
  max: number;
  minImg: string;
  maxImg?: string;
};

const FilterContainer = ({min, max, ...restProps}: Props) => {
  return (
    <li className={styles.detailsItem}>
      <span className={styles.input}>
        <RangeInput min={min} max={max} {...restProps}/>
      </span>
    </li>
  );
};

export default FilterContainer;

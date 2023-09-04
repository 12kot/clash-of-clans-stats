import RangeInput from "components/ui/rangeInput/RangeInput";
import React from "react";
import styles from "./Filter.module.scss";
import { useAppDispatch } from "hooks/store";
import { addFilter } from "store/slices/FilterSlice";
import { TFilterItem } from "types/types/slices/filterTypes";

type Props = {
  min: number;
  max: number;
  minImg: string;
  maxImg?: string;
  item: TFilterItem
};

const FilterContainer = ({ min, max, item, ...restProps }: Props) => {
  const dispatch = useAppDispatch();

  const onChange = (value: number) => {
    dispatch(addFilter({ type: item.type, value: value }))
  }
  return (
    <li className={styles.detailsItem}>
      <span className={styles.input}>
        <RangeInput min={min} max={max} value={item.value} {...restProps} onChangeValue={onChange} currentValue={item.value} />
      </span>
    </li>
  );
};

export default FilterContainer;

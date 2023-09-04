import React from "react";
import exp from "assets/img/icons/exp.png";
import FilterContainer from "../FilterContainer";
import { TFilterItem } from "types/types/slices/filterTypes";

type Props = {
  item: TFilterItem;
  max: number;
};

const LevelFilter = ({item, max}: Props) => {
  return <FilterContainer min={1} max={max} minImg={exp} item={item} />;
};

export default LevelFilter;

import React from "react";
import exp from "assets/img/icons/exp.png";
import FilterContainer from "../../FilterContainer";
import { TFilterItem } from "types/types/slices/filterTypes";

type Props = {
  item: TFilterItem;
};

const CLanLevelFilter = ({item}: Props) => {
  return <FilterContainer min={1} max={30} minImg={exp} item={item} />;
};

export default CLanLevelFilter;

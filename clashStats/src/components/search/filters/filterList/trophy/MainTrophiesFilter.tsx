import React from "react";
import trophy from "assets/img/trophies/trophy.png";
import FilterContainer from "../FilterContainer";
import { TFilterItem } from "types/types/slices/filterTypes";

type Props = {
  item: TFilterItem;
  max: number;
};

const MainTrophiesFilter = ({item, max}: Props) => {
  return <FilterContainer min={0} max={max} minImg={trophy} item={item}/>;
};

export default MainTrophiesFilter;

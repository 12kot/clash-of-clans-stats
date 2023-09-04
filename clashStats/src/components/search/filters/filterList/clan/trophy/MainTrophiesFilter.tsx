import React from "react";
import trophy from "assets/img/trophies/trophy.png";
import FilterContainer from "../../FilterContainer";
import { TFilterItem } from "types/types/slices/filterTypes";

type Props = {
  item: TFilterItem;
};

const MainTrophiesFilter = ({item}: Props) => {
  return <FilterContainer min={0} max={70000} minImg={trophy} item={item}/>;
};

export default MainTrophiesFilter;

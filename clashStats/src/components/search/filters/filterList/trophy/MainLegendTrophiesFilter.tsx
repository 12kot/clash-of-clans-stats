import React from "react";
import trophy from "assets/img/trophies/legend.png";
import { TFilterItem } from "types/types/slices/filterTypes";
import FilterContainer from "../FilterContainer";

type Props = {
  item: TFilterItem;
  max: number;
};

const MainLegendTrophiesFilter = ({item, max}: Props) => {
  return <FilterContainer min={0} max={max} minImg={trophy} item={item}/>;
};

export default MainLegendTrophiesFilter;

import React from "react";
import minTownhall from "assets/img/townhall/capital/1.png";
import maxTtownhall from "assets/img/townhall/capital/10.png";
import FilterContainer from "../../FilterContainer";
import { TFilterItem } from "types/types/slices/filterTypes";

type Props = {
  item: TFilterItem;
};

const CapitalFilter = ({item}: Props) => {
  return <FilterContainer min={1} max={10} minImg={minTownhall} maxImg={maxTtownhall} item={item} />;
};

export default CapitalFilter;

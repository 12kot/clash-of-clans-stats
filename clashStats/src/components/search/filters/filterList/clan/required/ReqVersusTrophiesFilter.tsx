import React from "react";
import trophy from "assets/img/trophies/versus.png";
import FilterContainer from "../../FilterContainer";
import { TFilterItem } from "types/types/slices/filterTypes";

type Props = {
  item: TFilterItem;
};

const ReqVersusTrophiesFilter = ({ item }: Props) => {
  return <FilterContainer min={0} max={5500} minImg={trophy} item={item} />;
};

export default ReqVersusTrophiesFilter;

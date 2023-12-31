import React from "react";
import minTownhall from "assets/img/townhall/main/1.png";
import maxTownhall from "assets/img/townhall/main/15.png";
import FilterContainer from "../FilterContainer";
import { TFilterItem } from "types/types/slices/filterTypes";

type Props = {
  item: TFilterItem;
};

const TownhallFilter = ({ item }: Props) => {
  return (
    <FilterContainer
      min={1}
      max={15}
      minImg={minTownhall}
      maxImg={maxTownhall}
      item={item}
    />
  );
};

export default TownhallFilter;

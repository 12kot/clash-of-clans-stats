import React from "react";
import minTownhall from "assets/img/townhall/versus/1.png";
import maxTownhall from "assets/img/townhall/versus/10.webp";
import FilterContainer from "../FilterContainer";
import { TFilterItem } from "types/types/slices/filterTypes";

type Props = {
  item: TFilterItem;
};

const VersusTownhallFilter = ({ item }: Props) => {
  return (
    <FilterContainer
      min={1}
      max={10}
      minImg={minTownhall}
      maxImg={maxTownhall}
      item={item}
    />
  );
};

export default VersusTownhallFilter;

import React from "react";
import minTownhall from "assets/img/townhall/main/1.png";
import maxTownhall from "assets/img/townhall/main/15.png";
import FilterContainer from "../FilterContainer";

const TownhallFilter = () => {
  return <FilterContainer min={1} max={15} minImg={minTownhall} maxImg={maxTownhall} />;
};

export default TownhallFilter;

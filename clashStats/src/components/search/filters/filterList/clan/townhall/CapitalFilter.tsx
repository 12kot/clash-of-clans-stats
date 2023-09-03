import React from "react";
import minTownhall from "assets/img/townhall/capital/1.png";
import maxTtownhall from "assets/img/townhall/capital/10.png";
import FilterContainer from "../../FilterContainer";

const CapitalFilter = () => {
  return <FilterContainer min={1} max={10} minImg={minTownhall} maxImg={maxTtownhall} />;
};

export default CapitalFilter;

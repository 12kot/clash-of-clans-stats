import React from "react";
import trophy from "assets/img/trophies/trophy.png";
import FilterContainer from "../../FilterContainer";

const ReqMainTrophiesFilter = () => {
  return <FilterContainer min={0} max={5500} minImg={trophy} />;
};

export default ReqMainTrophiesFilter;

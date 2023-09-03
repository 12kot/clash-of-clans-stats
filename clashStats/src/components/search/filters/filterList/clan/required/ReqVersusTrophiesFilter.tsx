import React from "react";
import trophy from "assets/img/trophies/versus.png";
import FilterContainer from "../../FilterContainer";

const ReqVersusTrophiesFilter = () => {
  return <FilterContainer min={0} max={5500} minImg={trophy} />;
};

export default ReqVersusTrophiesFilter;

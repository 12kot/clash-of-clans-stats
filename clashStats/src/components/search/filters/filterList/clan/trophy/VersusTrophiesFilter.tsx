import React from "react";
import trophy from "assets/img/trophies/versus.png";
import FilterContainer from "../../FilterContainer";

const VersusTrophiesFilter = () => {
  return <FilterContainer min={0} max={70000} minImg={trophy} />;
};

export default VersusTrophiesFilter;

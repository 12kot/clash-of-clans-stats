import React from "react";
import trophy from "assets/img/trophies/trophy.png";
import FilterContainer from "../../FilterContainer";

const MainTrophiesFilter = () => {
  return <FilterContainer min={0} max={70000} minImg={trophy} />;
};

export default MainTrophiesFilter;

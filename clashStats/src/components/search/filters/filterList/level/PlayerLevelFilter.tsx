import React from "react";
import exp from "assets/img/icons/exp.png";
import FilterContainer from "../FilterContainer";

const CLanLevelFilter = () => {
  return <FilterContainer min={1} max={500} minImg={exp} />;
};

export default CLanLevelFilter;

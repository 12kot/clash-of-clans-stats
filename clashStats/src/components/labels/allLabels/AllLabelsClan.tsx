import React from "react";
import { selectFilterClanLabels } from "store/selectors/filterSelectors";
import { addClanLabel } from "store/slices/FilterSlice";
import AllLabels from "./AllLabels";
import { getAllLabels } from "./AllLabels.service";
import { useLabels } from "hooks/labels/useLabels";

const AllLabelsClan = () => {
  const { active, onClick } = useLabels(selectFilterClanLabels, addClanLabel);
  return <AllLabels labels={getAllLabels(active, onClick)} />;
};

export default AllLabelsClan;

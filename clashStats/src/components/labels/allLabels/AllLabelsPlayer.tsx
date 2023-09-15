import React from "react";
import {
  selectFilterPlayerLabels,
} from "store/selectors/filterSelectors";
import { addPlayerLabel } from "store/slices/FilterSlice";
import AllLabels from "./AllLabels";
import { getAllLabels } from "./AllLabels.service";
import { useLabels } from "hooks/labels/useLabels";

const AllLabelsPlayer = () => {
  const { active, onClick } = useLabels(selectFilterPlayerLabels, addPlayerLabel);
  return <AllLabels labels={getAllLabels(active, onClick)} />;
};

export default AllLabelsPlayer;

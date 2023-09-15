import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/store";
import {
  selectFilterPlayerLabels,
} from "store/selectors/filterSelectors";
import { addPlayerLabel } from "store/slices/FilterSlice";
import AllLabels from "./AllLabels";
import { getAllLabels } from "./AllLabels.service";

const AllLabelsPlayer = () => {
  const active = useAppSelector(selectFilterPlayerLabels);
  const dispatch = useAppDispatch();

  const onClick = (index: number) => {
    dispatch(addPlayerLabel(index));
  };

  return <AllLabels labels={getAllLabels(active, onClick)} />;
};

export default AllLabelsPlayer;

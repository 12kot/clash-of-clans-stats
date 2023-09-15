import React from "react";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { selectFilterClanLabels } from "store/selectors/filterSelectors";
import { addClanLabel } from "store/slices/FilterSlice";
import AllLabels from "./AllLabels";
import { getAllLabels } from "./AllLabels.service";

const AllLabelsClan = () => {
  const active = useAppSelector(selectFilterClanLabels);
  const dispatch = useAppDispatch();

  const onClick = (index: number) => {
    dispatch(addClanLabel(index));
  };

  return <AllLabels labels={getAllLabels(active, onClick)} />;
};

export default AllLabelsClan;

import React from "react";
import Sort from "../Sort";
import { TSortItem } from "types/types/card/basic/sort/sortBasicTypes";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { selectSortBasicClan } from "store/selectors/sortSelectors";
import { changeBasicClanSort } from "store/slices/SortSlice";

const SortBasicClan = () => {
  const clanSort = useAppSelector(selectSortBasicClan);
  const dispatch = useAppDispatch();

  const handleClick = (item: TSortItem) => {
    dispatch(changeBasicClanSort({ item }));
  };

  return <Sort {...clanSort} handleClick={handleClick} />;
};

export default SortBasicClan;

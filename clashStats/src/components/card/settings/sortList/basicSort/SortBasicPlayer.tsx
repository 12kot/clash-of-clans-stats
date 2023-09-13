import React from "react";
import Sort from "../Sort";
import { TSortItem } from "types/types/card/basic/sort/sortBasicTypes";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { selectSortBasicPlayer } from "store/selectors/sortSelectors";
import { changeBasicPlayerSort } from "store/slices/SortSlice";

const SortBasicPlayer = () => {
  const clanSort = useAppSelector(selectSortBasicPlayer);
  const dispatch = useAppDispatch();

  const handleClick = (item: TSortItem) => {
    dispatch(changeBasicPlayerSort({ item }));
  };

  return <Sort {...clanSort} handleClick={handleClick} />;
};

export default SortBasicPlayer;

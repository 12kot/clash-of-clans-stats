import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { TStore } from "types/types/slices/storeType";

//меняем активные лейблы
export const useActiveLabels = (
  selector: (state: TStore) => number[],
  func: ActionCreatorWithPayload<number>
) => {
  const active = useAppSelector(selector);
  const dispatch = useAppDispatch();

  const onClick = (index: number) => {
    dispatch(func(index));
  };

  return { active, onClick };
};

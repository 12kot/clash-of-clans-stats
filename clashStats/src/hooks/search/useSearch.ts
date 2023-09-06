import { AsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { useDebounce } from "hooks/debounce/useDebounce";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { useEffect } from "react";
import { TStore } from "types/types/slices/storeType";

type AsyncThunkConfig = {
  dispatch?: Dispatch;
};

export const useSearch = <TFunc, Tdata>(
  value: string,
  func: AsyncThunk<{ items: TFunc[] }, { name: string }, AsyncThunkConfig>,
  path: (state: TStore) => Tdata
) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(path);
  
  const debounce = useDebounce(value, 500);

  useEffect(() => {
    if (value.length > 3 && debounce) dispatch(func({ name: value }));
  }, [dispatch, debounce, func]);

  return { data };
};

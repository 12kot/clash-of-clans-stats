import { AsyncThunk } from "@reduxjs/toolkit";
import { useDebounce } from "hooks/debounce/useDebounce";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { useEffect } from "react";
import { AsyncThunkConfig } from "types/types/AsyncThunkConfig";
import { TStore } from "types/types/slices/storeType";

export const useSearch = <TFunc, Tdata, TFilters>(
  value: string,
  func: AsyncThunk<{ items: TFunc[] }, { name: string, filters: TFilters }, AsyncThunkConfig>,
  selector: (state: TStore) => Tdata,
  selectorFilters: (state: TStore) => TFilters
) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selector);
  const filters = useAppSelector(selectorFilters);
  
  const debounce = useDebounce(value, 500);

  useEffect(() => {
    if (value.length > 3 && debounce) dispatch(func({ name: value, filters }));
  }, [dispatch, debounce, func]);

  return { data };
};

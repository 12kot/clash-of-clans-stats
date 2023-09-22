import { AsyncThunk } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { useEffect } from "react";
import { AsyncThunkConfig } from "types/types/AsyncThunkConfig";
import { TStore } from "types/types/slices/storeType";

//штука для обращения к стейту
export const useRequest = <TSelector, TFuncReturn, TFuncGet>(
  selector: (state: TStore) => TSelector,
  func: AsyncThunk<TFuncReturn, TFuncGet | void, AsyncThunkConfig>
) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selector);

  useEffect(() => {
    dispatch(func());
  }, [dispatch, func]);

  return { items };
};

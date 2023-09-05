import { AsyncThunk, Dispatch } from "@reduxjs/toolkit";
import { useDebounce } from "hooks/debounce/useDebounce";
import { useAppDispatch } from "hooks/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TCard } from "types/types/card/cardTypes";

type AsyncThunkConfig = {
  dispatch?: Dispatch;
};

export const useSearch = (
  value: string,
  func: AsyncThunk<{ items: TCard[] }, { name: string }, AsyncThunkConfig>
) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const debounce = useDebounce(value, 500);

  useEffect(() => {
    if (value.length > 3 && debounce) dispatch(func({ name: value }));
  }, [dispatch, debounce]);

  const OnClick = (): void => {
    navigate(`/search/clan?tag=${value}`);
  };

  return { OnClick };
};

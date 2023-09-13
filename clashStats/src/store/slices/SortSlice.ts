import { InitSort } from "./../../types/initial/slices/sortInitial";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TSortItem } from "types/types/card/basic/sort/sortBasicTypes";
import { TSortSlice } from "types/types/slices/sortTypes";

const initialState: TSortSlice = {
  ...InitSort,
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeClanSortType(state, action: PayloadAction<{ item: TSortItem }>) {
      state.basic.clan.current = action.payload.item;
    },
  },
  extraReducers: (builder) => {},
});

export default sortSlice;
export const { changeClanSortType } = sortSlice.actions;

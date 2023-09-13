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
    changeBasicClanSort(state, action: PayloadAction<{ item: TSortItem }>) {
      state.basic.clan.current = action.payload.item;
    },
    changeBasicPlayerSort(state, action: PayloadAction<{ item: TSortItem }>) {
      state.basic.player.current = action.payload.item;
    },
  },
  extraReducers: (builder) => {},
});

export default sortSlice;
export const { changeBasicClanSort, changeBasicPlayerSort } = sortSlice.actions;

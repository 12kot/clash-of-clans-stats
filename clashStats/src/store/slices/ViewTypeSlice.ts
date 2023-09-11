import { InitViewType } from "./../../types/initial/slices/viewTypeInitial";
import { createSlice } from "@reduxjs/toolkit";
import { TViewTypeSlice } from "types/types/slices/viewTypes";

const initialState: TViewTypeSlice = {
  ...InitViewType,
};

const viewTypeSlice = createSlice({
  name: "viewType",
  initialState,
  reducers: {
    changeViewType(state) {
      state.type === "block" ? (state.type = "line") : (state.type = "block");
    },
  },
  extraReducers: (builder) => {},
});

export default viewTypeSlice;
export const { changeViewType } = viewTypeSlice.actions;


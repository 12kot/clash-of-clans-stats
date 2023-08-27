import { InitClanSlice } from "./../../types/initial/slices/clanInitial";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { clanMembersInitial } from "types/initial/initial";
import { TClanSlice } from "types/slices/clanTypes";
import { clanMembersType } from "types/types";

const initialState: TClanSlice = {
  ...InitClanSlice,
};

export const getClanMembers = createAsyncThunk<
  { clanMembers: clanMembersType },
  { clanTag: string }
>("clan/getClanMembers", async (props, { rejectWithValue }) => {
  const res = await fetch(
    `http://localhost:8000/clanMembers?clanTag=${props.clanTag}`
  );

  try {
    if (res.ok) {
      const data: clanMembersType = await res.json();
      return { clanMembers: data };
    }

    return rejectWithValue("");
  } catch {
    return rejectWithValue("");
  }
});

const clanSlice = createSlice({
  name: "clan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClanMembers.pending, (state) => {})
      .addCase(getClanMembers.fulfilled, (state, action) => {
        state.clanMembers = action.payload.clanMembers;
      })
      .addCase(getClanMembers.rejected, (state, action) => {
        state.clanMembers = clanMembersInitial;
      });
  },
});

export default clanSlice;

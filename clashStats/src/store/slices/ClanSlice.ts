import { InitClanSlice } from "./../../types/initial/slices/clanInitial";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitClanMembers } from "types/initial/clan/clanInitial";
import { TClanMembers } from "types/types/clan/clanTypes";
import { TClanSlice } from "types/types/slices/clanTypes";

const initialState: TClanSlice = {
  ...InitClanSlice,
};

//Это всё не используется, как и компонент table, всё это буду переписывать
export const getClanMembers = createAsyncThunk<
  { clanMembers: TClanMembers },
  { clanTag: string }
>("clan/getClanMembers", async (props, { rejectWithValue }) => {
  const res = await fetch(
    `http://localhost:8000/clanMembers?clanTag=${props.clanTag}`
  );

  try {
    if (res.ok) {
      const data: TClanMembers = await res.json();
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
        state.clanMembers = InitClanMembers;
      });
  },
});

export default clanSlice;

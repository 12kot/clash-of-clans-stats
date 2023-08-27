import { InitSearchSlice } from "./../../types/initial/slices/searchInitial";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataFromFetch } from "./getDataFromFetch";
import { TSearchSlice } from "types/types/slices/searchTypes";
import { TCard } from "types/types/card/cardTypes";

const initialState: TSearchSlice = {
  ...InitSearchSlice,
};

export const searchPlayers = createAsyncThunk<
  { items: TCard[] },
  { name: string }
>("clan/searchPlayers", async (props, { rejectWithValue }) => {
  const res: TCard[] | Error = await getDataFromFetch(
    `search/player?tag=${props.name.replaceAll("#", "")}`
  );

  if (res instanceof Error) return rejectWithValue(res.message);
  return { items: res };
});

export const searchClans = createAsyncThunk<
  { items: TCard[] },
  { name: string }
>("clan/searchClans", async (props, { rejectWithValue }) => {
  const limit = 10;
  const res: TCard[] | Error = await getDataFromFetch(
    `search/clan?name=${props.name.replaceAll("#", "")}&limit=${limit}`
  );

  if (res instanceof Error) return rejectWithValue(res.message);
  return { items: res };
});

const searchSlice = createSlice({
  name: "clan",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchClans.pending, (state) => {
        state.clans.loading = true;
      })
      .addCase(searchClans.fulfilled, (state, action) => {
        state.clans.list = action.payload.items;
        state.clans.loading = false;
      })
      .addCase(searchClans.rejected, (state) => {
        state.clans.list = [];
        state.clans.loading = false;
      })

      .addCase(searchPlayers.pending, (state) => {
        state.players.loading = true;
      })
      .addCase(searchPlayers.fulfilled, (state, action) => {
        state.players.list = action.payload.items;
        state.players.loading = false;
      })
      .addCase(searchPlayers.rejected, (state) => {
        state.players.list = [];
        state.players.loading = false;
      });
  },
});

export default searchSlice;

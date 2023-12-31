import { InitAppSlice } from "./../../types/initial/slices/appInitial";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataFromServer } from "./getDataFromServer";
import { TAppSlice } from "types/types/slices/appTypes";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import { InitCardBasicPlayer } from "types/initial/card/basic/player/cardBasicPlayerInitial";
import { InitCardBasicClan } from "types/initial/card/basic/clan/cardBasicClanInitial";

const initialState: TAppSlice = {
  ...InitAppSlice,
};

export const getTopPlayer = createAsyncThunk<{ topPlayer: TCardBasicPlayer }, void>(
  "app/getTopPlayer",
  async (_, { rejectWithValue }) => {
    const res: TCardBasicPlayer | Error = await getDataFromServer(`cards/player/top`);

    if (res instanceof Error) return rejectWithValue(res.message);
    return { topPlayer: res };
  }
);

export const getPopularPlayer = createAsyncThunk<
  { popularPlayer: TCardBasicPlayer },
  void
>("app/getPopularPlayer", async (_, { rejectWithValue }) => {
  const res: TCardBasicPlayer | Error = await getDataFromServer(`cards/player/popular`);

  if (res instanceof Error) return rejectWithValue(res.message);
  return { popularPlayer: res };
});

export const getPopularClan = createAsyncThunk<{ popularClan: TCardBasicClan }, void>(
  "app/getPopularClan",
  async (_, { rejectWithValue }) => {
    const res: TCardBasicClan | Error = await getDataFromServer(`cards/clan/popular`);

    if (res instanceof Error) return rejectWithValue(res.message);
    return { popularClan: res };
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTopPlayer.pending, (state) => {
        state.cards.topPlayer.loading = true;
      })
      .addCase(getTopPlayer.fulfilled, (state, action) => {
        state.cards.topPlayer.item = action.payload.topPlayer;
        state.cards.topPlayer.loading = false;
      })
      .addCase(getTopPlayer.rejected, (state) => {
        state.cards.topPlayer.item = InitCardBasicPlayer;
      })

      .addCase(getPopularPlayer.pending, (state) => {
        state.cards.popularPlayer.loading = true;
      })
      .addCase(getPopularPlayer.fulfilled, (state, action) => {
        state.cards.popularPlayer.item = action.payload.popularPlayer;
        state.cards.popularPlayer.loading = false;
      })
      .addCase(getPopularPlayer.rejected, (state) => {
        state.cards.popularPlayer.item = InitCardBasicPlayer;
      })

      .addCase(getPopularClan.pending, (state) => {
        state.cards.popularClan.loading = true;
      })
      .addCase(getPopularClan.fulfilled, (state, action) => {
        state.cards.popularClan.item = action.payload.popularClan;
        state.cards.popularClan.loading = false;
      })
      .addCase(getPopularClan.rejected, (state) => {
        state.cards.popularClan.item = InitCardBasicClan;
      });
  },
});

export default appSlice;

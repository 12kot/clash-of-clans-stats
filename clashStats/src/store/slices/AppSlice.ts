import { InitAppSlice } from "./../../types/initial/slices/appInitial";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataFromServer } from "./getDataFromServer";
import { TAppSlice } from "types/types/slices/appTypes";
import { TBasicCardPlayer } from "types/types/card/basic/player/basicPlayerCardTypes";
import { TBasicCardClan } from "types/types/card/basic/clan/basicClanCardTypes";
import { InitBasicCardPlayer } from "types/initial/card/basic/player/basicPlayerCardInitial";
import { InitBasicCardClan } from "types/initial/card/basic/clan/basicClanCardInitial";

const initialState: TAppSlice = {
  ...InitAppSlice,
};

export const getTopPlayer = createAsyncThunk<{ topPlayer: TBasicCardPlayer }, void>(
  "app/getTopPlayer",
  async (_, { rejectWithValue }) => {
    const res: TBasicCardPlayer | Error = await getDataFromServer(`cards/player/top`);

    if (res instanceof Error) return rejectWithValue(res.message);
    return { topPlayer: res };
  }
);

export const getPopularPlayer = createAsyncThunk<
  { popularPlayer: TBasicCardPlayer },
  void
>("app/getPopularPlayer", async (_, { rejectWithValue }) => {
  const res: TBasicCardPlayer | Error = await getDataFromServer(`cards/player/popular`);

  if (res instanceof Error) return rejectWithValue(res.message);
  return { popularPlayer: res };
});

export const getPopularClan = createAsyncThunk<{ popularClan: TBasicCardClan }, void>(
  "app/getPopularClan",
  async (_, { rejectWithValue }) => {
    const res: TBasicCardClan | Error = await getDataFromServer(`cards/clan/popular`);

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
        state.cards.topPlayer.item = InitBasicCardPlayer;
      })

      .addCase(getPopularPlayer.pending, (state) => {
        state.cards.popularPlayer.loading = true;
      })
      .addCase(getPopularPlayer.fulfilled, (state, action) => {
        state.cards.popularPlayer.item = action.payload.popularPlayer;
        state.cards.popularPlayer.loading = false;
      })
      .addCase(getPopularPlayer.rejected, (state) => {
        state.cards.popularPlayer.item = InitBasicCardPlayer;
      })

      .addCase(getPopularClan.pending, (state) => {
        state.cards.popularClan.loading = true;
      })
      .addCase(getPopularClan.fulfilled, (state, action) => {
        state.cards.popularClan.item = action.payload.popularClan;
        state.cards.popularClan.loading = false;
      })
      .addCase(getPopularClan.rejected, (state) => {
        state.cards.popularClan.item = InitBasicCardClan;
      });
  },
});

export default appSlice;

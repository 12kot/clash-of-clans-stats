import { InitAppSlice } from "./../../types/initial/slices/appInitial";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardType } from "types/cardTypes";
import { InitCard } from "types/initial/initial";
import { getDataFromFetch } from "./getDataFromFetch";
import { TAppSlice } from "types/slices/appTypes";

const initialState: TAppSlice = {
  ...InitAppSlice,
};

export const getTopPlayer = createAsyncThunk<{ topPlayer: CardType }, void>(
  "app/getTopPlayer",
  async (_, { rejectWithValue }) => {
    const res: CardType | Error = await getDataFromFetch(`cards/player/top`);

    if (res instanceof Error) return rejectWithValue(res.message);
    return { topPlayer: res };
  }
);

export const getPopularPlayer = createAsyncThunk<
  { popularPlayer: CardType },
  void
>("app/getPopularPlayer", async (_, { rejectWithValue }) => {
  const res: CardType | Error = await getDataFromFetch(`cards/player/popular`);

  if (res instanceof Error) return rejectWithValue(res.message);
  return { popularPlayer: res };
});

export const getPopularClan = createAsyncThunk<{ popularClan: CardType }, void>(
  "app/getPopularClan",
  async (_, { rejectWithValue }) => {
    const res: CardType | Error = await getDataFromFetch(`cards/clan/popular`);

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
        state.cards.topPlayer.item = InitCard;
      })

      .addCase(getPopularPlayer.pending, (state) => {
        state.cards.popularPlayer.loading = true;
      })
      .addCase(getPopularPlayer.fulfilled, (state, action) => {
        state.cards.popularPlayer.item = action.payload.popularPlayer;
        state.cards.popularPlayer.loading = false;
      })
      .addCase(getPopularPlayer.rejected, (state) => {
        state.cards.popularPlayer.item = InitCard;
      })

      .addCase(getPopularClan.pending, (state) => {
        state.cards.popularClan.loading = true;
      })
      .addCase(getPopularClan.fulfilled, (state, action) => {
        state.cards.popularClan.item = action.payload.popularClan;
        state.cards.popularClan.loading = false;
      })
      .addCase(getPopularClan.rejected, (state) => {
        state.cards.popularClan.item = InitCard;
      });
  },
});

export default appSlice;

import { InitLabelsSlice } from "./../../types/initial/slices/labelsInitial";
import { TLabel } from "types/types/label/labelTypes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataFromServer } from "./getDataFromServer";
import { TLabelsSlice } from "types/types/slices/labelsTypes";

const initialState: TLabelsSlice = {
  ...InitLabelsSlice,
};

export const getLabelsPlayers = createAsyncThunk<{ labels: TLabel[] }, void>(
  "labels/getLabelsPlayers",
  async (_, { rejectWithValue }) => {
    const res: TLabel[] | Error = await getDataFromServer(`labels/players`);

    if (res instanceof Error) return rejectWithValue(res.message);
    return { labels: res };
  }
);

export const getLabelsClans = createAsyncThunk<{ labels: TLabel[] }, void>(
  "labels/getLabelsClans",
  async (_, { rejectWithValue }) => {
    console.log("res")
    const res: TLabel[] | Error = await getDataFromServer(`labels/clans`);


    if (res instanceof Error) return rejectWithValue(res.message);
    return { labels: res };
  }
);

const labelsSlice = createSlice({
  name: "labels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLabelsPlayers.pending, (state, action) => {
        state.player.loading = true;
      })
      .addCase(getLabelsPlayers.fulfilled, (state, action) => {
        state.player.items = action.payload.labels;
        console.log(action.payload.labels);

        state.player.loading = false;
      })
      .addCase(getLabelsPlayers.rejected, (state, action) => {
        state.player.items = [];
        state.player.loading = true;
      })

      .addCase(getLabelsClans.pending, (state, action) => {
        state.clan.loading = true;
      })
      .addCase(getLabelsClans.fulfilled, (state, action) => {
        state.clan.items = action.payload.labels;
        console.log(action.payload.labels);

        state.clan.loading = false;
      })
      .addCase(getLabelsClans.rejected, (state, action) => {
        state.clan.items = [];
        state.clan.loading = true;
      });
  },
});

export default labelsSlice;

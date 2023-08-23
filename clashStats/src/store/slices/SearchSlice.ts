import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SearchType } from "types/search";
import { getDataFromFetch } from "./getDataFromFetch";

interface stateType {
  clans: {
    list: SearchType[];
    loading: boolean;
  };

  players: {
    list: SearchType[];
    loading: boolean;
  };
}

const initialState: stateType = {
  clans: {
    list: [],
    loading: false,
  },

  players: {
    list: [],
    loading: false,
  },
};

export const searchClans = createAsyncThunk<{searchClanItems: SearchType[]}, { name: string }>(
  "clan/searchClans",
  async (props, { rejectWithValue }) => {
    const limit = 10;
    const res: SearchType[] | Error = await getDataFromFetch(
      `searchclan?name=${props.name}&limit=${limit}`
    );

    if (res instanceof Error) return rejectWithValue(res.message);
    return { searchClanItems: res };
  }
);

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
      state.clans.list = action.payload.searchClanItems;
      state.clans.loading = false;
    })
      .addCase(searchClans.rejected, (state) => {
      state.clans.list = [];
      state.clans.loading = false;
    })
  },
});

export default searchSlice;

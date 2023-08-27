import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDataFromFetch } from "./getDataFromFetch";
import { CardType } from "types/cardTypes";

interface stateType {
  clans: {
    list: CardType[];
    loading: boolean;
  };

  players: {
    list: CardType[];
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

export const searchPlayers = createAsyncThunk<{searchClanItems: CardType[]}, { name: string }>(
  "clan/searchPlayers",
  async (props, { rejectWithValue }) => {
    const limit = 10;
    const res: CardType[] | Error = await getDataFromFetch(
      `searchclan?name=${props.name.replaceAll("#", "")}&limit=${limit}`
    );

    if (res instanceof Error) return rejectWithValue(res.message);
    return { searchClanItems: res };
  }
);

export const searchClans = createAsyncThunk<{searchClanItems: CardType[]}, { name: string }>(
  "clan/searchClans",
  async (props, { rejectWithValue }) => {
    const limit = 10;
    const res: CardType[] | Error = await getDataFromFetch(
      `searchclan?name=${props.name.replaceAll("#", "")}&limit=${limit}`
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

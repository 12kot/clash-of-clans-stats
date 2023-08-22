import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardType } from "types/cardTypes";
import { initialCard } from "types/initial";

const initialState = { card: initialCard };

export const getTopPlayers = createAsyncThunk<{ topPlayer: CardType }, void>(
  "app/getTopPlayers",
  async (_, { rejectWithValue }) => {
    const res = await fetch(`http://localhost:8000/topcards`);

    try {
      if (res.ok) {
        const data: CardType = await res.json();
        console.log(data);
        return { topPlayer: data };
      }

      return rejectWithValue("");
    } catch {
      return rejectWithValue("");
    }
  }
);

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTopPlayers.fulfilled, (state, action) => {
      state.card = action.payload.topPlayer;
      console.log(state.card);
    });
  },
});

export default appSlice;

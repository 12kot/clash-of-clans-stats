import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CardType } from "types/cardTypes";
import { initialCard } from "types/initial";

type InitialStateType = {
  cards: {
    topPlayer: {
      player: CardType;
      loading: boolean;
    };

    popularPlayer: {
      player: CardType;
      loading: boolean;
    };

    popularClan: {
      player: CardType;
      loading: boolean;
    };
  };
};

const initialState: InitialStateType = {
  cards: {
    topPlayer: {
      player: initialCard,
      loading: false,
    },

    popularPlayer: {
      player: initialCard,
      loading: false,
    },

    popularClan: {
      player: initialCard,
      loading: false,
    },
  },
};

const getData = async <T>(path: string): Promise<T | boolean> => {
  const res = await fetch(`http://localhost:8000/${path}`);

  try {
    if (res.ok) {
      const data: T = await res.json();
      return data;
    }

    return false;
  } catch {
    return false;
  }
};

export const getTopPlayer = createAsyncThunk<{ topPlayer: CardType }, void>(
  "app/getTopPlayer",
  async (_, { rejectWithValue }) => {
    const res: CardType | boolean = await getData(`cards/topPlayer`);

    if (typeof res === "boolean") return rejectWithValue("");
    return { topPlayer: res };
  }
);

export const getPopularPlayer = createAsyncThunk<
  { popularPlayer: CardType },
  void
>("app/getPopularPlayer", async (_, { rejectWithValue }) => {
  const res: CardType | boolean = await getData(`cards/popularPlayer`);

  if (typeof res === "boolean") return rejectWithValue("");
  return { popularPlayer: res };
});

export const getPopularClan = createAsyncThunk<{ popularClan: CardType }, void>(
  "app/getTopPlayer",
  async (_, { rejectWithValue }) => {
    const res: CardType | boolean = await getData(`cards/popularClan`);

    if (typeof res === "boolean") return rejectWithValue("");
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
        state.cards.topPlayer.player = action.payload.topPlayer;
        state.cards.topPlayer.loading = false;
      })
      .addCase(getTopPlayer.rejected, (state) => {
        state.cards.topPlayer.player = initialCard;
        state.cards.topPlayer.loading = false;
      })

      .addCase(getPopularPlayer.pending, (state) => {
        state.cards.popularPlayer.loading = true;
      })
      .addCase(getPopularPlayer.fulfilled, (state, action) => {
        state.cards.popularPlayer.player = action.payload.popularPlayer;
        state.cards.popularPlayer.loading = false;
      })
      .addCase(getPopularPlayer.fulfilled, (state, action) => {
        state.cards.popularPlayer.player = initialCard;
        state.cards.popularPlayer.loading = false;
      })

      .addCase(getPopularClan.pending, (state) => {
        state.cards.popularClan.loading = true;
      })
      .addCase(getPopularClan.fulfilled, (state, action) => {
        state.cards.popularClan.player = action.payload.popularClan;
        state.cards.popularClan.loading = false;
      })
      .addCase(getPopularClan.rejected, (state) => {
        state.cards.popularClan.player = initialCard;
        state.cards.popularClan.loading = false;
      });
  },
});

export default appSlice;

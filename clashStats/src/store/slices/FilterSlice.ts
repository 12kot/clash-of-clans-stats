import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitFilter } from "types/initial/slices/filterInitial";
import { TFilterSlice, TFilterItem } from "types/types/slices/filterTypes";

const initialState: TFilterSlice = {
  ...InitFilter,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter(state, action: PayloadAction<TFilterItem>) {
      switch (action.payload.type) {
        case "clan_reqTownhall":
          state.clan.required.townhall.value = action.payload.value;
          break;
        case "clan_reqTrophy":
          state.clan.required.trophy.value = action.payload.value;
          break;
        case "clan_reqVersusTrophy":
          state.clan.required.versusTrophy.value = action.payload.value;
          break;
        case "clan_capitalTownhall":
          state.clan.details.capitalTownhall.value = action.payload.value;
          break;
        case "clan_trophy":
          state.clan.details.trophy.value = action.payload.value;
          break;
        case "clan_versusTrophy":
          state.clan.details.versusTrophy.value = action.payload.value;
          break;
        case "clan_level":
          state.clan.details.level.value = action.payload.value;
          break;
        case "player_townhall":
          state.player.details.townhall.value = action.payload.value;
          break;
        case "player_versusTownhall":
          state.player.details.versusTownhall.value = action.payload.value;
          break;
        case "player_trophy":
          state.player.details.trophy.value = action.payload.value;
          break;
        case "player_versusTrophy":
          state.player.details.versusTrophy.value = action.payload.value;
          break;
        case "player_legendaryTrophy":
          state.player.details.legendaryTrophy.value = action.payload.value;
          break;
        case "player_legendaryVersusTrophy":
          state.player.details.legendaryVersusTrophy.value =
            action.payload.value;
          break;
        case "player_level":
          state.player.details.level.value = action.payload.value;
          break;
      }
    },

    addClanLabel(state, action: PayloadAction<number>) {
      const index = action.payload;

      if (state.clan.labels.includes(index))
        state.clan.labels = state.clan.labels.filter((i) => i !== index);
      else if (state.clan.labels.length === 3)
        state.clan.labels = [...state.clan.labels.slice(1), index];
      else state.clan.labels.push(index);
    },

    addPlayerLabel(state, action: PayloadAction<number>) {
      const index = action.payload;

      if (state.player.labels.includes(index))
        state.player.labels = state.player.labels.filter((i) => i !== index);
      else if (state.player.labels.length === 3)
        state.player.labels = [...state.player.labels.slice(1), index];
      else state.player.labels.push(index);
    },
  },
  extraReducers: (builder) => {},
});

export default filterSlice;
export const { addFilter, addClanLabel, addPlayerLabel } = filterSlice.actions;

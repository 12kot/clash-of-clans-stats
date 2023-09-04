import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitFilter } from "types/initial/slices/filterInitial";
import { TClanFIlterSlice, TFilterItem } from "types/types/slices/filterTypes";

const initialState: TClanFIlterSlice = {
  ...InitFilter,
};

const FilterSlice = createSlice({
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
  },
  extraReducers: (builder) => {},
});

export default FilterSlice;
export const { addFilter } = FilterSlice.actions;

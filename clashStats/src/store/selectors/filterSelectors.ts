import { TStore } from "types/types/slices/storeType";

export const selectFilterClan = (state: TStore) => state.filter.clan;
export const selectFilterClanLabels = (state: TStore) => state.filter.clan.labels;

export const selectFilterPlayer = (state: TStore) => state.filter.player;
export const selectFilterPlayerLabels = (state: TStore) => state.filter.player.labels;

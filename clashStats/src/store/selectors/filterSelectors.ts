import { TStore } from "types/types/slices/storeType";

export const selectFilterLabels = (state: TStore) => state.filter.labels;
export const selectFilterClan = (state: TStore) => state.filter.clan;
export const selectFilterPlayer = (state: TStore) => state.filter.player;

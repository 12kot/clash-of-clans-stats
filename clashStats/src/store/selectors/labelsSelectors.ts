import { TStore } from "types/types/slices/storeType";

export const selectLabelsPlayers = (state: TStore) => state.labels.player;
export const selectLabelsClans = (state: TStore) => state.labels.clan;

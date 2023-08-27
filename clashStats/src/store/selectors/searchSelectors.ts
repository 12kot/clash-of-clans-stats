import { TStore } from "types/types/slices/storeType";

export const selectSearchPlayers = (state: TStore) => state.search.players
export const selectSearchClans = (state: TStore) => state.search.clans
import { TStore } from "types/types/slices/storeType";

export const selectSearchPlayers = (state: TStore) => state.search.players;
export const selectSearchPlayersList = (state: TStore) => state.search.players.list;
export const selectSearchPlayersLoading = (state: TStore) => state.search.players.loading;

export const selectSearchClans = (state: TStore) => state.search.clans;
export const selectSearchClansList = (state: TStore) => state.search.clans.list;
export const selectSearchClansLoading = (state: TStore) => state.search.clans.loading;
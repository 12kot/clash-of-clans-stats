import { TStore } from "types/types/slices/storeType";

export const selectSortBasicClan = (state: TStore) => state.sort.basic.clan;
export const selectSortBasicPlayer = (state: TStore) => state.sort.basic.player;
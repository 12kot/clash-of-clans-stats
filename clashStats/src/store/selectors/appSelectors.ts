import { TStore } from "types/slices/storeType";

export const selectAppPopularClan = (state: TStore) =>
  state.app.cards.popularClan;

export const selectAppPopularPlayer = (state: TStore) =>
  state.app.cards.popularPlayer;

export const selectAppTopPlayer = (state: TStore) => state.app.cards.topPlayer;

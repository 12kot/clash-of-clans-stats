import { TSearchCard, TSearchCardClan, TSearchCardPlayer, TSearchSlice } from "types/types/slices/searchTypes";

export const InitSearchCard: TSearchCard = {
  loading: false,
};

export const InitSearchCardPlayer: TSearchCardPlayer = {
  list: [],
  ...InitSearchCard
};

export const InitSearchCardClan: TSearchCardClan = {
  list: [],
  ...InitSearchCard
};

export const InitSearchSlice: TSearchSlice = {
  players: InitSearchCardPlayer,
  clans: InitSearchCardClan,
}
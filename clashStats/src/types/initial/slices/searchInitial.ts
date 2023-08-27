import { TSearchCard, TSearchSlice } from "types/slices/searchTypes";

export const InitSearchCard: TSearchCard = {
  list: [],
  loading: false,
};

export const InitSearchSlice: TSearchSlice = {
  clans: InitSearchCard,
  players: InitSearchCard,
}
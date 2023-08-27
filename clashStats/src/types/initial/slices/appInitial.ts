import { TAppSlice, TFetchCard } from "types/slices/appTypes";
import { InitCard } from "../initial";

export const InitFetchCard: TFetchCard = {
  item: InitCard,
  loading: false,
};

export const InitAppSlice: TAppSlice = {
  cards: {
    topPlayer: InitFetchCard,
    popularPlayer: InitFetchCard,
    popularClan: InitFetchCard,
  },
};

import { TAppSlice, TFetchCard } from "types/types/slices/appTypes";
import { InitCard } from "../card/cardInitial";

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

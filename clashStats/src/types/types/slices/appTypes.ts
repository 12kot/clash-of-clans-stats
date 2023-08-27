import { TCard } from "../card/cardTypes";

export interface TFetchCard {
  item: TCard;
  loading: boolean;
}

export interface TAppSlice {
  cards: {
    topPlayer: TFetchCard;
    popularPlayer: TFetchCard;
    popularClan: TFetchCard;
  };
}

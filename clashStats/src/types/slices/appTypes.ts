import { CardType } from "../cardTypes";

export interface TFetchCard {
  item: CardType;
  loading: boolean;
}

export interface TAppSlice {
  cards: {
    topPlayer: TFetchCard;
    popularPlayer: TFetchCard;
    popularClan: TFetchCard;
  };
}
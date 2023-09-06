import { TCardClan, TCardPlayer } from "../card/cardTypes";

export interface TFetchCard {
  loading: boolean;
}

export interface TFetchCardPlayer extends TFetchCard {
  item: TCardPlayer;
}

export interface TFetchCardClan extends TFetchCard {
  item: TCardClan;
}

export interface TAppSlice {
  cards: {
    topPlayer: TFetchCardPlayer;
    popularPlayer: TFetchCardPlayer;
    popularClan: TFetchCardClan;
  };
}

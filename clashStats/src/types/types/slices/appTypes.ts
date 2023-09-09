import { TCardBasicClan } from "../card/basic/clan/cardBasicClanTypes";
import { TCardBasicPlayer } from "../card/basic/player/cardBasicPlayerTypes";

export interface TFetchCard {
  loading: boolean;
}

export interface TFetchCardPlayer extends TFetchCard {
  item: TCardBasicPlayer;
}

export interface TFetchCardClan extends TFetchCard {
  item: TCardBasicClan;
}

export interface TAppSlice {
  cards: {
    topPlayer: TFetchCardPlayer;
    popularPlayer: TFetchCardPlayer;
    popularClan: TFetchCardClan;
  };
}

import { TBasicCardClan } from "../card/basic/clan/basicClanCardTypes";
import { TBasicCardPlayer } from "../card/basic/player/basicPlayerCardTypes";

export interface TFetchCard {
  loading: boolean;
}

export interface TFetchCardPlayer extends TFetchCard {
  item: TBasicCardPlayer;
}

export interface TFetchCardClan extends TFetchCard {
  item: TBasicCardClan;
}

export interface TAppSlice {
  cards: {
    topPlayer: TFetchCardPlayer;
    popularPlayer: TFetchCardPlayer;
    popularClan: TFetchCardClan;
  };
}

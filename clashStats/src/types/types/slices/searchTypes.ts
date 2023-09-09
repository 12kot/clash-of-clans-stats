import { TCardBasicClan } from "../card/basic/clan/cardBasicClanTypes";
import { TCardBasicPlayer } from "../card/basic/player/cardBasicPlayerTypes";

export interface TSearchCard {
  loading: boolean;
}

export interface TSearchCardPlayer extends TSearchCard {
  list: TCardBasicPlayer[];
}

export interface TSearchCardClan extends TSearchCard {
  list: TCardBasicClan[];
}

export interface TSearchSlice {
  players: TSearchCardPlayer;
  clans: TSearchCardClan;
}

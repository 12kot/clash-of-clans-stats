import { TBasicCardClan } from "../card/basic/clan/basicClanCardTypes";
import { TBasicCardPlayer } from "../card/basic/player/basicPlayerCardTypes";

export interface TSearchCard {
  loading: boolean;
}

export interface TSearchCardPlayer extends TSearchCard {
  list: TBasicCardPlayer[];
}

export interface TSearchCardClan extends TSearchCard {
  list: TBasicCardClan[];
}

export interface TSearchSlice {
  players: TSearchCardPlayer;
  clans: TSearchCardClan;
}

import { TCardClan, TCardPlayer } from "../card/cardTypes";

export interface TSearchCard {
  loading: boolean;
}

export interface TSearchCardPlayer extends TSearchCard {
  list: TCardPlayer[];
}

export interface TSearchCardClan extends TSearchCard {
  list: TCardClan[];
}

export interface TSearchSlice {
  players: TSearchCardPlayer;
  clans: TSearchCardClan;
}

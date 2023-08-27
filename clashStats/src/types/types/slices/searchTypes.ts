import { TCard } from "../card/cardTypes";

export interface TSearchCard {
  list: TCard[];
  loading: boolean;
}

export interface TSearchSlice {
  clans: TSearchCard;
  players: TSearchCard;
}

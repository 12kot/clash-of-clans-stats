import { CardType } from "types/cardTypes";

export interface TSearchCard {
  list: CardType[];
  loading: boolean;
}

export interface TSearchSlice {
  clans: TSearchCard;
  players: TSearchCard;
}

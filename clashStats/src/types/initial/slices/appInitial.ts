import {
  TAppSlice,
  TFetchCard,
  TFetchCardClan,
  TFetchCardPlayer,
} from "types/types/slices/appTypes";
import { InitCardBasicPlayer } from "../card/basic/player/cardBasicPlayerInitial";
import { InitCardBasicClan } from "../card/basic/clan/cardBasicClanInitial";

export const InitFetchCard: TFetchCard = {
  loading: false,
};

export const InitFetchCardPlayer: TFetchCardPlayer = {
  item: InitCardBasicPlayer,
  ...InitFetchCard,
};

export const InitFetchCardClan: TFetchCardClan = {
  item: InitCardBasicClan,
  ...InitFetchCard,
};

export const InitAppSlice: TAppSlice = {
  cards: {
    topPlayer: InitFetchCardPlayer,
    popularPlayer: InitFetchCardPlayer,
    popularClan: InitFetchCardClan,
  },
};

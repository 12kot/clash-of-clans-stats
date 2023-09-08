import {
  TAppSlice,
  TFetchCard,
  TFetchCardClan,
  TFetchCardPlayer,
} from "types/types/slices/appTypes";
import { InitCardClan, InitCardPlayer } from "../card/basic/basicCardInitial";

export const InitFetchCard: TFetchCard = {
  loading: false,
};

export const InitFetchCardPlayer: TFetchCardPlayer = {
  item: InitCardPlayer,
  ...InitFetchCard,
};

export const InitFetchCardClan: TFetchCardClan = {
  item: InitCardClan,
  ...InitFetchCard,
};

export const InitAppSlice: TAppSlice = {
  cards: {
    topPlayer: InitFetchCardPlayer,
    popularPlayer: InitFetchCardPlayer,
    popularClan: InitFetchCardClan,
  },
};

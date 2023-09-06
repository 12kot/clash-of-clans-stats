import { TAppSlice, TFetchCardClan, TFetchCardPlayer } from "types/types/slices/appTypes";
import { InitCardClan, InitCardPlayer } from "../card/cardInitial";

export const InitFetchCardPlayer: TFetchCardPlayer= {
  item: InitCardPlayer,
  loading: false,
};

export const InitFetchCardClan: TFetchCardClan= {
  item: InitCardClan,
  loading: false,
};

export const InitAppSlice: TAppSlice = {
  cards: {
    topPlayer: InitFetchCardPlayer,
    popularPlayer: InitFetchCardPlayer,
    popularClan: InitFetchCardClan,
  },
};

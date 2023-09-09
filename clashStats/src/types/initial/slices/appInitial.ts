import {
  TAppSlice,
  TFetchCard,
  TFetchCardClan,
  TFetchCardPlayer,
} from "types/types/slices/appTypes";
import { InitBasicCardPlayer } from "../card/basic/player/basicPlayerCardInitial";
import { InitBasicCardClan } from "../card/basic/clan/basicClanCardInitial";

export const InitFetchCard: TFetchCard = {
  loading: false,
};

export const InitFetchCardPlayer: TFetchCardPlayer = {
  item: InitBasicCardPlayer,
  ...InitFetchCard,
};

export const InitFetchCardClan: TFetchCardClan = {
  item: InitBasicCardClan,
  ...InitFetchCard,
};

export const InitAppSlice: TAppSlice = {
  cards: {
    topPlayer: InitFetchCardPlayer,
    popularPlayer: InitFetchCardPlayer,
    popularClan: InitFetchCardClan,
  },
};

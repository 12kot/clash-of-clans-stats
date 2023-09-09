import {
  InitCardTrophies,
  InitCardOther,
  InitCardMain,
  InitBasicCard,
} from "./../basicCardInitial";
import {
  TBasicCardPlayer,
  TBasicCardPlayerMainInfo,
  TBasicCardPlayerOtherInfo,
  TBasicCardPlayerTrophies,
} from "types/types/card/basic/player/basicPlayerCardTypes";
import { InitCardItem } from "../basicCardInitial";

export const InitBasicCardPlayerTrophies: TBasicCardPlayerTrophies = {
  mainLegend: InitCardItem,
  ...InitCardTrophies,
};
export const InitBasicCardPlayerOtherInfo: TBasicCardPlayerOtherInfo = {
  stars: InitCardItem,
  ...InitCardOther,
};

export const InitBasicCardPlayerMainInfo: TBasicCardPlayerMainInfo = {
  townHall: InitCardItem,
  clan: InitCardItem,
  ...InitCardMain,
};

export const InitBasicCardPlayer: TBasicCardPlayer = {
  mainInfo: InitBasicCardPlayerMainInfo,
  trophies: InitBasicCardPlayerTrophies,
  otherInfo: InitBasicCardPlayerOtherInfo,
  ...InitBasicCard,
};

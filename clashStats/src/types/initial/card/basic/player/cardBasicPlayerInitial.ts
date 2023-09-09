import {
  InitCardTrophies,
  InitCardOther,
  InitCardMain,
  InitCardBasic,
  InitCardItem
} from "../cardBasicInitial";
import {
  TCardBasicPlayer,
  TCardBasicPlayerMainInfo,
  TCardBasicPlayerOtherInfo,
  TCardBasicPlayerTrophies,
} from "types/types/card/basic/player/cardBasicPlayerTypes";

export const InitCardBasicPlayerTrophies: TCardBasicPlayerTrophies = {
  mainLegend: InitCardItem,
  ...InitCardTrophies,
};
export const InitCardBasicPlayerOtherInfo: TCardBasicPlayerOtherInfo = {
  stars: InitCardItem,
  ...InitCardOther,
};

export const InitCardBasicPlayerMainInfo: TCardBasicPlayerMainInfo = {
  townHall: InitCardItem,
  clan: InitCardItem,
  ...InitCardMain,
};

export const InitCardBasicPlayer: TCardBasicPlayer = {
  mainInfo: InitCardBasicPlayerMainInfo,
  trophies: InitCardBasicPlayerTrophies,
  otherInfo: InitCardBasicPlayerOtherInfo,
  ...InitCardBasic,
};

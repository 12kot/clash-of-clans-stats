import {
  InitCardTrophies,
  InitCardOther,
  InitCardMain,
  InitBasicCard,
} from "./../basicCardInitial";
import {
  TBasicCardClanMainInfo,
  TBasicCardClanOtherInfo,
  TBasicCardClanTrophies,
  TBasicCardClan,
} from "types/types/card/basic/clan/basicClanCardTypes";
import { InitCardItem } from "../basicCardInitial";

export const InitBasicCardClanTrophies: TBasicCardClanTrophies = {
  capital: InitCardItem,
  ...InitCardTrophies,
};

export const InitBasicCardClanOtherInfo: TBasicCardClanOtherInfo = {
  members: InitCardItem,
  ...InitCardOther,
};

export const InitBasicCardClanMainInfo: TBasicCardClanMainInfo = {
  clanBanner: InitCardItem,
  capital: InitCardItem,
  country: InitCardItem,
  ...InitCardMain,
};

export const InitBasicCardClan: TBasicCardClan = {
  mainInfo: InitBasicCardClanMainInfo,
  trophies: InitBasicCardClanTrophies,
  otherInfo: InitBasicCardClanOtherInfo,
  ...InitBasicCard,
};

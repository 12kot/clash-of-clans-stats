import {
  InitCardTrophies,
  InitCardOther,
  InitCardMain,
  InitCardBasic,
  InitCardItem
} from "../cardBasicInitial";
import {
  TCardBasicClanMainInfo,
  TCardBasicClanOtherInfo,
  TCardBasicClanTrophies,
  TCardBasicClan,
} from "types/types/card/basic/clan/cardBasicClanTypes";

export const InitCardBasicClanTrophies: TCardBasicClanTrophies = {
  capital: InitCardItem,
  ...InitCardTrophies,
};

export const InitCardBasicClanOtherInfo: TCardBasicClanOtherInfo = {
  members: InitCardItem,
  ...InitCardOther,
};

export const InitCardBasicClanMainInfo: TCardBasicClanMainInfo = {
  clanBanner: InitCardItem,
  capital: InitCardItem,
  country: InitCardItem,
  ...InitCardMain,
};

export const InitCardBasicClan: TCardBasicClan = {
  mainInfo: InitCardBasicClanMainInfo,
  trophies: InitCardBasicClanTrophies,
  otherInfo: InitCardBasicClanOtherInfo,
  ...InitCardBasic,
};

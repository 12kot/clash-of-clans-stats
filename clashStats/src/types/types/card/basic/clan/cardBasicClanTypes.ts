import {
  TCard,
  TCardItem,
  TCardMain,
  TCardOther,
  TCardTrophies,
} from "../cardBasicTypes";

export interface TCardBasicClanTrophies extends TCardTrophies {
  capital: TCardItem;
}

export interface TCardBasicClanOtherInfo extends TCardOther {
  members: TCardItem;
}

export interface TCardBasicClanMainInfo extends TCardMain {
  clanBanner: TCardItem;
  capital: TCardItem;
  country: TCardItem
}

export interface TCardBasicClan extends TCard {
  mainInfo: TCardBasicClanMainInfo;
  trophies: TCardBasicClanTrophies;
  otherInfo: TCardBasicClanOtherInfo;
}

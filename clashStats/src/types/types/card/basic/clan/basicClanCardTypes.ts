import {
  TCard,
  TCardItem,
  TCardMain,
  TCardOther,
  TCardTrophies,
} from "../basicCardTypes";

export interface TBasicCardClanTrophies extends TCardTrophies {
  capital: TCardItem;
}

export interface TBasicCardClanOtherInfo extends TCardOther {
  members: TCardItem;
}

export interface TBasicCardClanMainInfo extends TCardMain {
  clanBanner: TCardItem;
  capital: TCardItem;
  country: TCardItem
}

export interface TBasicCardClan extends TCard {
  mainInfo: TBasicCardClanMainInfo;
  trophies: TBasicCardClanTrophies;
  otherInfo: TBasicCardClanOtherInfo;
}

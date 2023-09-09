import {
  TCard,
  TCardItem,
  TCardMain,
  TCardOther,
  TCardTrophies,
} from "../cardBasicTypes";

export interface TCardBasicPlayerTrophies extends TCardTrophies {
  mainLegend: TCardItem;
}
export interface TCardBasicPlayerOtherInfo extends TCardOther {
  stars: TCardItem;
}

export interface TCardBasicPlayerMainInfo extends TCardMain {
  clan: TCardItem;
  townHall: TCardItem;
}

export interface TCardBasicPlayer extends TCard {
  mainInfo: TCardBasicPlayerMainInfo;
  trophies: TCardBasicPlayerTrophies;
  otherInfo: TCardBasicPlayerOtherInfo;
}

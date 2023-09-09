import {
  TCard,
  TCardItem,
  TCardMain,
  TCardOther,
  TCardTrophies,
} from "../basicCardTypes";

export interface TBasicCardPlayerTrophies extends TCardTrophies {
  mainLegend: TCardItem;
}
export interface TBasicCardPlayerOtherInfo extends TCardOther {
  stars: TCardItem;
}

export interface TBasicCardPlayerMainInfo extends TCardMain {
  clan: TCardItem;
  townHall: TCardItem;
}

export interface TBasicCardPlayer extends TCard {
  mainInfo: TBasicCardPlayerMainInfo;
  trophies: TBasicCardPlayerTrophies;
  otherInfo: TBasicCardPlayerOtherInfo;
}

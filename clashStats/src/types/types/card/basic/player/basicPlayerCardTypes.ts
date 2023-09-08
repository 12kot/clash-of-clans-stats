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
  townHall: TCardItem;
  clanBanner: {
    img: string;
    code: string;
    title: string;
  };
}

export interface TBasicCardPlayer extends TCard {
  mainInfo: TBasicCardPlayerMainInfo;
  trophies: TBasicCardPlayerTrophies;
  otherInfo: TBasicCardPlayerOtherInfo;
}

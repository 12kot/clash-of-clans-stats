import { TSearchButton } from "types/types";
import { TLabel } from "../label/labelTypes";

export interface TCard {
  img: string;
  headerCard: TCardHeader;
  labels: TLabel[];
}

export interface TCardItem {
  img: string;
  value: number;
}

export interface TCardHeader {
  object: {
    img: string;
    title: string;
    name: string;
    tag: string;
    type: TSearchButton;
  };

  labels: TLabel[];
}

export interface TCardTrophies {
  main: TCardItem;
  versus: TCardItem;
}

export interface TCardPlayerTrophies extends TCardTrophies {
  mainLegend: TCardItem;
}

export interface TCardClanTrophies extends TCardTrophies {
  capital: TCardItem;
}

export interface TCardOtherInfo {
  level: TCardItem;
}

export interface TCardPlayerOtherInfo extends TCardOtherInfo {
  stars: TCardItem;
}

export interface TCardClanOtherInfo extends TCardOtherInfo {
  members: TCardItem;
}

export interface TCardPlayer extends TCard {
  trophies: TCardPlayerTrophies;
  otherInfo: TCardPlayerOtherInfo;
}

export interface TCardClan extends TCard {
  trophies: TCardClanTrophies;
  otherInfo: TCardClanOtherInfo;
}

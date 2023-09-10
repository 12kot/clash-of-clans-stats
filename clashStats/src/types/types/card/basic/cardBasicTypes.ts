import { TLabel } from "types/types/label/labelTypes";

export interface TCard {
  labels: TLabel[];
}

export interface TCardMain {
  name: string;
  tag: string;
}

export interface TCardItem {
  img: string;
  value: number;
  title: string;
}

export interface TCardTrophies {
  main: TCardItem;
  versus: TCardItem;
}

export interface TCardOther {
  level: TCardItem;
}

export interface TCardBasicGeneralized {
  head: {
    info: {
      banner: TCardItem;
      name: string;
      tag: string;
    };
    labels: TLabel[];
  };

  trophies: TCardItem[];
  otherInfo: TCardItem[];
  labels: TLabel[];
  absoluteImg: TCardItem;
}

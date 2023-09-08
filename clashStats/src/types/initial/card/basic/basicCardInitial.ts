import {
  TCard,
  TCardItem,
  TCardMain,
  TCardOther,
  TCardTrophies,
} from "types/types/card/basic/basicCardTypes";

export const InitBasicCard: TCard = { labels: [] };

export const InitCardItem: TCardItem = {
  img: "",
  title: "",
  value: 0,
};


export const InitCardMain: TCardMain = {
  name: "",
  tag: "",
};

export const InitCardTrophies: TCardTrophies = {
  main: InitCardItem,
  versus: InitCardItem,
};

export const InitCardOther: TCardOther = {
  level: InitCardItem,
};

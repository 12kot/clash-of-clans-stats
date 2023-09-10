import {
  TCard,
  TCardItem,
  TCardMain,
  TCardOther,
  TCardTrophies,
} from "types/types/card/basic/cardBasicTypes";

export const InitCardBasic: TCard = {
  labels: [
    {
      img: "https://api-assets.clashofclans.com/labels/64/hM7SHnN0x7syFa-s6fE7LzeO5yWG2sfFpZUHuzgMwQg.png",
      title: "a",
      id: 113,
    },
    {
      img: "https://api-assets.clashofclans.com/labels/64/hM7SHnN0x7syFa-s6fE7LzeO5yWG2sfFpZUHuzgMwQg.png",
      title: "a",
      id: 113,
    },
    {
      img: "https://api-assets.clashofclans.com/labels/64/hM7SHnN0x7syFa-s6fE7LzeO5yWG2sfFpZUHuzgMwQg.png",
      title: "a",
      id: 113,
    },
  ],
};

export const InitCardItem: TCardItem = {
  img: "https://api-assets.clashofclans.com/badges/70/JMWw_ktbIZNzPo_0SoiNM_8YSOf9MDS1p3lC1e3QAbY.png",
  title: "Отстранённые",
  value: 0,
};

export const InitCardMain: TCardMain = {
  name: "Отстранённые",
  tag: "луораудол",
};

export const InitCardTrophies: TCardTrophies = {
  main: InitCardItem,
  versus: InitCardItem,
};

export const InitCardOther: TCardOther = {
  level: InitCardItem,
};

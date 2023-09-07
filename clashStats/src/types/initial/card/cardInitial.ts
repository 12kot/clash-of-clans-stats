import {
  TCard,
  TCardClan,
  TCardItem,
  TCardPlayer,
  TCardTrophies,
} from "types/types/card/cardTypes";

export const InitCard: TCard = {
  img: "",
  headerCard: {
    object: {
      title: "",
      img: "",
      name: "",
      tag: "",
      type: "PLAYER",
    },

    labels: [],
  },
  labels: [],
};

export const InitCardItem: TCardItem = {
  img: "",
  value: 0,
};

export const InitCardTrophies: TCardTrophies = {
  main: InitCardItem,
  versus: InitCardItem,
};

export const InitCardPlayer: TCardPlayer = {
  ...InitCard,
  trophies: {
    ...InitCardTrophies,
    mainLegend: InitCardItem,
  },

  otherInfo: {
    level: InitCardItem,
    stars: InitCardItem,
  },
};

export const InitCardClan: TCardClan = {
  ...InitCard,
  trophies: {
    ...InitCardTrophies,
    capital: InitCardItem,
  },

  otherInfo: {
    level: InitCardItem,
    members: InitCardItem,
  },
};

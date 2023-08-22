import { CardType } from "./cardTypes";
import { clanMembersType, playerHouseType, playerType } from "./types";

export const playerHouseInitial: playerHouseType = {
  playerHouse: {
    elements: [],
  },
};

export const playerLeagueInitial = {
  league: {
    id: 0,
    name: "",
    iconUrls: {
      small: "",
      tiny: "",
      medium: "",
    },
  },
};

export const playerInitial: playerType = {
  tag: "",
  name: "",
  role: "",
  expLevel: 0,
  trophies: 0,
  builderBaseTrophies: 0,
  versusTrophies: 0,
  clanRank: 0,
  previousClanRank: 0,
  donations: 0,
  donationsReceived: 0,
  ...playerLeagueInitial,
  ...playerHouseInitial,
};

export const clanMembersInitial: clanMembersType = {
  items: [playerInitial],
};

export const initialCard: CardType = {
  header: "",
  headerCard: {
    player: {
      img: "",
      name: "",
      tag: "",
    },

    labels: [],
  },
  trophies: [],
  otherInfo: [],
  labels: [],
};

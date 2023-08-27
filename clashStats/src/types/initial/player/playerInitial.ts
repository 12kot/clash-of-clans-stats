import { TPlayer, TPlayerHouse } from "types/types/player/playerTypes";

export const InitPlayerHouse: TPlayerHouse = {
    playerHouse: {
      elements: [],
    },
  };
  
  export const InitPlayerLeague= {
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
  
  export const InitPlayer: TPlayer = {
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
    ...InitPlayerHouse,
    ...InitPlayerLeague,
  };
  
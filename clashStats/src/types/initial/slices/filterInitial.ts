import {
  TFilterClan,
  TFilterPlayer,
  TFilterSlice,
} from "types/types/slices/filterTypes";

export const InitFilterClan: TFilterClan = {
  required: {
    townhall: {
      type: "clan_reqTownhall",
      value: 0,
    },
    trophy: {
      type: "clan_reqTrophy",
      value: 0,
    },
    versusTrophy: {
      type: "clan_reqVersusTrophy",
      value: 0,
    },
  },

  details: {
    capitalTownhall: {
      type: "clan_capitalTownhall",
      value: 0,
    },
    trophy: {
      type: "clan_trophy",
      value: 0,
    },
    versusTrophy: {
      type: "clan_versusTrophy",
      value: 0,
    },
    level: {
      type: "clan_level",
      value: 0,
    },
  },
  labels: [],
};

export const InitFilterPlayer: TFilterPlayer = {
  details: {
    townhall: {
      type: "player_townhall",
      value: 0,
    },
    versusTownhall: {
      type: "player_versusTownhall",
      value: 0,
    },
    trophy: {
      type: "player_trophy",
      value: 0,
    },
    versusTrophy: {
      type: "player_versusTrophy",
      value: 0,
    },
    legendaryTrophy: {
      type: "player_legendaryTrophy",
      value: 0,
    },
    legendaryVersusTrophy: {
      type: "player_legendaryVersusTrophy",
      value: 0,
    },
    level: {
      type: "player_level",
      value: 0,
    },
  },
  labels: [],
};

export const InitFilter: TFilterSlice = {
  clan: InitFilterClan,
  player: InitFilterPlayer,
};

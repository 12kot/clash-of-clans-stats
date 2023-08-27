export interface TPlayerHouse {
  playerHouse: {
    elements: {
      type: string;
      id: number;
    }[];
  };
}

export interface TPlayerLeague {
  league: {
    id: number;
    name: string;
    iconUrls: {
      small: string;
      tiny: string;
      medium: string;
    };
  };
}

export interface TPlayer extends TPlayerLeague, TPlayerHouse {
  tag: string;
  name: string;
  role: string;
  expLevel: number;
  trophies: number;
  builderBaseTrophies: number;
  versusTrophies: number;
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
}

export interface playerHouseType {
  playerHouse: {
    elements: {
      type: string;
      id: number;
    }[];
  };
}

export interface playerLeagueType {
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

export interface playerType extends playerLeagueType, playerHouseType {
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

export interface clanMembersType {
  items: playerType[];
}

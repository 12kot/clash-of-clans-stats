export interface TClanFIlterSlice {
  clan: {
    required: {
      townhall: TFilterItem;
      trophy: TFilterItem;
      versusTrophy: TFilterItem;
    };

    details: {
      capitalTownhall: TFilterItem;
      trophy: TFilterItem;
      versusTrophy: TFilterItem;
      clanLevel: TFilterItem;
    };
  };

  player: {
    details: {
      townhall: TFilterItem;
      versusTownhall: TFilterItem;
      trophy: TFilterItem;
      versusTrophy: TFilterItem;
      legendaryTrophy: TFilterItem;
      legendaryVersusTrophy: TFilterItem;
      playerLevel: TFilterItem;
    };
  };
}

export interface TFilterItem {
  type:
    | "clan_reqTownhall"
    | "clan_reqTrophy"
    | "clan_reqVersusTrophy"
    | "clan_trophy"
    | "clan_versusTrophy"
    | "clan_capitalTownhall"
    | "clan_level"
    | "player_townhall"
    | "player_versusTownhall"
    | "player_trophy"
    | "player_versusTrophy"
    | "player_legendaryTrophy"
    | "player_legendaryVersusTrophy"
    | "player_level";
  value: number;
}

export type TSortItem = TSortBasicClanItem | TSortBasicPlayerItem;


export interface TSortBasicClanItem {
  key: TSortBasicClanKeys;
  value: TSortBasicClanValues;
}
export interface TSortBasicPlayerItem {
  key: TSortBasicPlayerKeys;
  value: TSortBasicPlayerValues;
}

export interface TSortTypes {
  type: "basicClan" | "basicPlayer";
}

export interface TSortBasic {
  current: TSortItem;
}

export type TSortBasicClanKeys =
  | "name"
  | "tag"
  | "level"
  | "members"
  | "capitalLevel"
  | "trophies"
  | "versusTrophies"
  | "capitalTrophies";

export type TSortBasicClanValues =
  | "Name"
  | "Tag"
  | "Level"
  | "Members"
  | "Capital level"
  | "Trophies"
  | "Versus trophies"
  | "Capital trophies";

export type TSortBasicPlayerKeys =
  | "name"
  | "tag"
  | "level"
  | "stars"
  | "townhall"
  | "trophies"
  | "versusTrophies"
  | "mainLegend";

export type TSortBasicPlayerValues =
  | "Name"
  | "Tag"
  | "Level"
  | "Stars"
  | "Townhall"
  | "Trophies"
  | "Versus trophies"
  | "Legend trophies";

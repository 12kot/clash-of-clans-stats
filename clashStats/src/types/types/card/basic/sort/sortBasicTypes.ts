export interface TSortItem {
  key: string;
  value: string;
}

export type TSortBasicClanItem =
  | { key: "name"; value: "Name" }
  | { key: "tag"; value: "Tag" }
  | { key: "level"; value: "Level" }
  | { key: "members"; value: "Members" }
  | { key: "capitalLevel"; value: "Capital level" }
  | { key: "trophies"; value: "Trophies" }
  | { key: "versusTrophies"; value: "Versus trophies" }
  | { key: "capitalTrophies"; value: "Capital trophies" };

export interface TSortTypes {
  type: "basicClan" | "basicPlayer";
}

import { InitSortItem } from "../sortBasicInit";
import { TSortBasicPlayer } from "types/types/card/basic/sort/player/sortBasicPlayerType";

export const InitSortBasicPlayer: TSortBasicPlayer = {
  current: InitSortItem,
  list: [
    { key: "name", value: "Name" },
    { key: "tag", value: "Tag" },
    { key: "level", value: "Level" },
    { key: "stars", value: "Stars" },
    { key: "townhall", value: "Townhall" },
    { key: "trophies", value: "Trophies" },
    { key: "versusTrophies", value: "Versus trophies" },
    { key: "mainLegend", value: "Legend trophies" },
  ],
};

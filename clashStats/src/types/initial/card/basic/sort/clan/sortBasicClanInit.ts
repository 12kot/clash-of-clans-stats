import { TSortBasicClan } from "types/types/card/basic/sort/clan/sortBasicClanType";
import { InitSortItem } from "../sortBasicInit";

export const InitSortBasicClan: TSortBasicClan = {
  current: InitSortItem,
  list: [
    { key: "name", value: "Name" },
    { key: "tag", value: "Tag" },
    { key: "level", value: "Level" },
    { key: "members", value: "Members" },
    { key: "capitalLevel", value: "Capital level" },
    { key: "trophies", value: "Trophies" },
    { key: "versusTrophies", value: "Versus trophies" },
    { key: "capitalTrophies", value: "Capital trophies" },
  ],
};

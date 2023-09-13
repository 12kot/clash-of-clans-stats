import { TSortSlice } from "types/types/slices/sortTypes";
import { InitSortBasicClan } from "../card/basic/sort/clan/sortBasicClanInit";
import { InitSortBasicPlayer } from "../card/basic/sort/player/sortBasicPlayerInit";

export const InitSort: TSortSlice = {
  basic: {
    clan: InitSortBasicClan,
    player: InitSortBasicPlayer,
  },
};

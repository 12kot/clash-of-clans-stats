import { TSortSlice } from "types/types/slices/sortTypes";
import { InitSortBasicClan } from "../card/basic/sort/clan/sortBasicClanInit";

export const InitSort: TSortSlice = {
  basic: {
    clan: InitSortBasicClan,
  },
};

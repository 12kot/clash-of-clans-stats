import { TAppSlice } from "./appTypes";
import { TClanSlice } from "./clanTypes";
import { TFIlterSlice } from "./filterTypes";
import { TSearchSlice } from "./searchTypes";

export type TStore = {
  app: TAppSlice;
  clan: TClanSlice;
  search: TSearchSlice;
  filter: TFIlterSlice;
};

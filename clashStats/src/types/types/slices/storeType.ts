import { TAppSlice } from "./appTypes";
import { TClanSlice } from "./clanTypes";
import { TFIlterSlice } from "./filterTypes";
import { TSearchSlice } from "./searchTypes";
import { TViewTypeSlice } from "./viewTypes";

export type TStore = {
  app: TAppSlice;
  clan: TClanSlice;
  search: TSearchSlice;
  filter: TFIlterSlice;
  viewType: TViewTypeSlice;
};

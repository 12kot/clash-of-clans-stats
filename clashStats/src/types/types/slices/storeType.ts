import { TAppSlice } from "./appTypes";
import { TClanSlice } from "./clanTypes";
import { TFilterSlice } from "./filterTypes";
import { TLabelsSlice } from "./labelsTypes";
import { TSearchSlice } from "./searchTypes";
import { TSortSlice } from "./sortTypes";
import { TViewTypeSlice } from "./viewTypes";

export type TStore = {
  app: TAppSlice;
  clan: TClanSlice;
  search: TSearchSlice;
  filter: TFilterSlice;
  viewType: TViewTypeSlice;
  sort: TSortSlice;
  labels: TLabelsSlice;
};

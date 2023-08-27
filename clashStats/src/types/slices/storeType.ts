import { TAppSlice } from "./appTypes";
import { TClanSlice } from "./clanTypes";
import { TSearchSlice } from "./searchTypes";

export type TStore = {
    app: TAppSlice;
    clan: TClanSlice;
    search: TSearchSlice;
  };
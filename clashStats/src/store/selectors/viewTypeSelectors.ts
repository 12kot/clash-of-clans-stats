import { TStore } from "types/types/slices/storeType";

export const selectViewType = (state: TStore) =>
  state.viewType.type;
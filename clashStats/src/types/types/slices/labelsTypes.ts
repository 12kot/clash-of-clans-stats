import { TLabel } from "../label/labelTypes";

export interface TLabelsItem {
  items: TLabel[];
  loading: boolean;
}

export interface TLabelsSlice {
  clan: TLabelsItem;
  player: TLabelsItem;
}

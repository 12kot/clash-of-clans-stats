import { TLabel } from "../label/labelTypes";

export interface TLabelsSlice {
  clan: {
    items: TLabel[];
    loading: boolean;
  };

  player: {
    items: TLabel[];
    loading: boolean;
  };
}

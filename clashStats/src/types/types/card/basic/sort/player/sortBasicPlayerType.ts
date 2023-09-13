import { TSortBasic, TSortBasicPlayerItem } from "../sortBasicTypes";

export interface TSortBasicPlayer extends TSortBasic {
  list: TSortBasicPlayerItem[];
}

import { TSortBasicClan } from "../card/basic/sort/clan/sortBasicClanType";
import { TSortBasicPlayer } from "../card/basic/sort/player/sortBasicPlayerType";

export interface TSortSlice {
  basic: {
    clan: TSortBasicClan;
    player: TSortBasicPlayer;
  };

  direction: "more" | "less";
}

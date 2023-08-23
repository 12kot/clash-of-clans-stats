import { getPlayerInfo } from "../getPlayerInfo.js";
import { playerCardMaker } from "./playerCardMaker.js";

export const getMostPopularPlayer = async (header) => {
  const player = await getPlayerInfo("YL8J8LYVP");
  if (!player.ok) return player;

  return playerCardMaker(await player.json(), header);
};

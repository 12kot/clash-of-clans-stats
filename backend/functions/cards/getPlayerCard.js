import { getPlayerInfo } from "../getPlayerInfo.js";
import { playerCardMaker } from "./playerCardMaker.js";

export const getPlayerCard = async (tag) => {
  const player = await getPlayerInfo(tag);
  if (!player.ok) return player;
  return playerCardMaker(await player.json());
};

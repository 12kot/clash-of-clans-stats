import { getPlayerInfo } from "../getPlayerInfo.js";
import { getTop } from "../getTop.js";
import { playerCardMaker } from "./playerCardMaker.js";

export const getTopPlayer = async (header) => {
  const data = await getTop(32000028, "players", 1);
  if (!data.ok) return false;
  const d = await data.json();

  let player = await getPlayerInfo(d.items[0].tag);
  if (!player.ok) return false;

  return playerCardMaker(await player.json(), header);
};

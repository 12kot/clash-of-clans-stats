import { getPlayerInfo } from "../getPlayerInfo.js";
import { getTop } from "../getTop.js";
import { playerCardMaker } from "./playerCardMaker.js";

export const getTopPlayer = async () => {
  const data = await getTop(32000028, "players", 1);
  if (!data.ok) return data;

  const d = await data.json();
  const player = await getPlayerInfo(d.items[0].tag);
  if (!player.ok) return player;

  return playerCardMaker(await player.json());
};

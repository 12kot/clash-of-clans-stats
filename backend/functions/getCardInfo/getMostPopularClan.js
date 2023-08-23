import { getClanInfo } from "../getClanInfo.js";
import { clanCardMaker } from "./clanCardMaker.js";

export const getMostPopularClan = async (header) => {
  const player = await getClanInfo("2QCRVUC99");
  if (!player.ok) return player;

  return clanCardMaker(await player.json(), header);
};

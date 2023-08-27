import { getClanInfo } from "../getClanInfo.js";
import { clanCardMaker } from "./clanCardMaker.js";

export const getClanCard = async (tag) => {
  const clan = await getClanInfo(tag);
  if (!clan.ok) return clan;

  return clanCardMaker(await clan.json());
};

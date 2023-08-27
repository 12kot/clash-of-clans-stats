import { fetchData } from "../../fetch/fetchData.js";
import { clanCardMaker } from "../cards/clanCardMaker.js";
import { getClanCard } from "../cards/getClanCard.js";
import { getClanInfo } from "../getClanInfo.js";

export const searchClan = async (name, limit) => {
  const clans = await fetchData(`clans?name=${name}&limit=${limit}`);
  if (!clans.ok) return clans;

  const res = await clans.json();
  const data = [];

  for (const clan of res.items) {
    data.push(await getClanCard(clan.tag));
  }

  if (data.length === 0) {
    data.push(await getClanCard(name));
  }

  return data;
};

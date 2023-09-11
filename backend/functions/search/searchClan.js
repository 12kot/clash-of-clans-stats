import { fetchData } from "../../fetch/fetchData.js";
import { clanCardMaker } from "../cards/clanCardMaker.js";
import { getClanInfo } from "../getClanInfo.js";

export const searchClan = async (name, limit) => {
  const clans = await fetchData(`clans?name=${name}&limit=${limit}`);
  if (!clans.ok) return clans;

  const res = await clans.json();
  const data = [];

  for (const clan of res.items) {
    const info = await getClanInfo(clan.tag);
    if (info.ok) data.push(await info.json());
  }

  if (data.length === 0) {
    const info = await getClanInfo(name);
    if (info.ok) data.push(await info.json());
  }

  return data.map((clan) => {
    //return clan
    return clanCardMaker(clan);
  });
};

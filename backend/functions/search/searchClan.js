import { fetchData } from "../../fetch/fetchData.js";
import { getClanInfo } from "../getClanInfo.js";
import { searchClanMaker } from "./searchClanMaker.js";

export const searchClan = async (name, limit) => {
  const clans = await fetchData(`clans?name=${name}&limit=${limit}`);
  if (!clans.ok) return clans;

  const data = await clans.json();

  const clan = await getClanInfo(name);
  if (clan.ok) data.items.push(await clan.json());

  return searchClanMaker((data).items);
};

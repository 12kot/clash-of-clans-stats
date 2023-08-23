import { fetchData } from "../../fetch/fetchData.js";
import { searchClanMaker } from "./searchClanMaker.js";

export const searchClan = async (name, limit) => {
  const clans = await fetchData(`clans?name=${name}&limit=${limit}`);
  if (!clans.ok) return player;

  return searchClanMaker((await clans.json()).items);
};

import { fetchData } from "../fetch/fetchData.js";

export const getClanInfo = async (clanTag) => {
  return await fetchData(`clans/%23${clanTag}`);
};

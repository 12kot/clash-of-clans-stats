import { fetchData } from "../fetch/fetchData.js";

export const getClanRaids = async (clanTag, count) => {
    return await fetchData(`clans/%23${clanTag}/capitalraidseasons?limit=${count}`);
};

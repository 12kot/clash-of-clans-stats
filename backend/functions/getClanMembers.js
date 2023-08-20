import { fetchData } from "../fetch/fetchData.js";

export const getClanMembers = async (clanTag) => {
    return await fetchData(`clans/%23${clanTag}/members`);
};

import { fetchData } from "../fetch/fetchData.js";

export const getClanUsers = async (clanTag) => {
    return await fetchData(`clans/${clanTag}/members`);
};

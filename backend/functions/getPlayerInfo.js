import { fetchData } from "../fetch/fetchData.js";

export const getPlayerInfo = async (playerTag) => {
    return await fetchData(`players/%23${playerTag}`);
};

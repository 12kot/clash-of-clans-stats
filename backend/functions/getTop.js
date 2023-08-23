import { fetchData } from "../fetch/fetchData.js";

export const getTop = async (location, type, count) => {
  return await fetchData(`locations/${location}/rankings/${type}?limit=${count}`);
};

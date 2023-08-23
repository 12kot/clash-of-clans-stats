import { getMostPopularClan } from "./getMostPopularClan.js";
import { getMostPopularPlayer } from "./getMostPopularPlayer.js";
import { getTopPlayer } from "./getTopPlayer.js";

export const getCards = async () => {
  const popularPlayer = await getMostPopularPlayer("Самый популярный игрок");
  const topPlayer = await getTopPlayer("Самый лучший игрок");
  const popularClan = await getMostPopularClan("Самый популярный клан");

  const array = [];
  if (!!popularPlayer) array.push(popularPlayer);
  if (!!topPlayer) array.push(topPlayer);
  if (!!popularClan) array.push(popularClan);
  return array;
};

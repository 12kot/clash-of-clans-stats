import { getMostPopularClan } from "./getMostPopularClan.js";
import { getMostPopularPlayer } from "./getMostPopularPlayer.js";
import { getTopPlayer } from "./getTopPlayer.js";

export const getCards = async () => {
  const popularPlayer = await getMostPopularPlayer("Самый популярный игрок");
  const topPlayer = await getTopPlayer("Лучший игрок Беларуси");
  const popularClan = await getMostPopularClan("Самый популярный клан");

  const array = [];
  if (!!popularClan) array.push(popularClan);
  if (!!popularPlayer) array.push(popularPlayer);
  if (!!popularPlayer) array.push(popularPlayer);
  if (!!popularPlayer) array.push(popularPlayer);
  if (!!popularPlayer) array.push(popularPlayer);
  if (!!topPlayer) array.push(topPlayer);
  return array;
};

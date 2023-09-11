import { getPlayerCard } from "../cards/getPlayerCard.js";

export const searchPlayer = async (tag) => {
  const player = await getPlayerCard(tag);
  console.dir(player)
  return !!player?.mainInfo?.tag ? [player] : [];
};

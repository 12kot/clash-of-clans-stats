import { getPlayerCard } from "../cards/getPlayerCard.js";

export const searchPlayer = async (tag) => {
  const player = await getPlayerCard(tag);
  return !!player?.headerCard?.object?.tag ? [player] : [];
};

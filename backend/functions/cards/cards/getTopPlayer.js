import { getTop } from "../../getTop.js";
import { getPlayerCard } from "../getPlayerCard.js";

export const getTopPlayer = async () => {
  const data = await getTop(32000028, "players", 1);
  if (!data.ok) return data;

  const d = await data.json();
  return getPlayerCard(d.items[0].tag);
};

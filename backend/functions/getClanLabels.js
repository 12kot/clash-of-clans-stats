import { fetchData } from "../fetch/fetchData.js";
import { getLabels } from "./getLabels.js";

export const getClanLabels = async () => {
  const res = await fetchData(`labels/clans`);

  if (res.ok) return getLabels(await res.json());
  return res;
};

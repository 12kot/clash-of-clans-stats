import { fetchData } from "../fetch/fetchData.js";
import { getLabels } from "./getLabels.js";

export const getPlayerLabels = async () => {
  const res =  await fetchData(`labels/players`);

    if (res.ok) return getLabels(await res.json());
    return res
};

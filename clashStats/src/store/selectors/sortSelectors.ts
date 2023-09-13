import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "types/types/slices/storeType";
import { selectSearchClansList } from "./searchSelectors";

export const selectSortBasicClan = (state: TStore) => state.sort.basic.clan;
export const selectDasicClanCurrentSort = (state: TStore) =>
  state.sort.basic.clan.current;

export const selectSortBasicPlayer = (state: TStore) => state.sort.basic.player;

export const selectBasicCardsClanByFilter = createSelector(
  [selectDasicClanCurrentSort, selectSearchClansList],
  (activeSort, clans) => {
    if (activeSort.key === "name")
        return clans.slice().sort((a, b) => {
          console.log(a.mainInfo.name, b.mainInfo.name)
        return a.mainInfo.name.localeCompare(b.mainInfo.name)}
      );

    if (activeSort.key === "tag")
      return clans.slice().sort((a, b) =>
        a.mainInfo.tag.localeCompare(b.mainInfo.tag)
      );

    if (activeSort.key === "capitalLevel")
      return clans.slice().sort(
        (a, b) => a.mainInfo.capital.value - b.mainInfo.capital.value
      );

    if (activeSort.key === "level")
      return clans.slice().sort(
        (a, b) => a.otherInfo.level.value - b.otherInfo.level.value
      );

    if (activeSort.key === "members")
      return clans.slice().sort(
        (a, b) => a.otherInfo.members.value - b.otherInfo.members.value
      );

    if (activeSort.key === "trophies")
      return clans.slice().sort(
        (a, b) => a.trophies.main.value - b.trophies.main.value
      );

    if (activeSort.key === "versusTrophies")
      return clans.slice().sort(
        (a, b) => a.trophies?.versus.value - b.trophies.versus.value
      );

    if (activeSort.key === "capitalTrophies")
      return clans.slice().sort(
        (a, b) => a.trophies?.capital.value - b.trophies.capital.value
      );

    return clans;
  }
);

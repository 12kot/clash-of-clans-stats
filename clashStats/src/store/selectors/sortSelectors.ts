import { createSelector } from "@reduxjs/toolkit";
import { TStore } from "types/types/slices/storeType";
import {
  selectSearchClansList,
  selectSearchPlayersList,
} from "./searchSelectors";

export const selectSortBasicClan = (state: TStore) => state.sort.basic.clan;
export const selectBasicClanCurrentSort = (state: TStore) =>
  state.sort.basic.clan.current;

export const selectSortBasicPlayer = (state: TStore) => state.sort.basic.player;
export const selectBasicPlayerCurrentSort = (state: TStore) =>
  state.sort.basic.player.current;

export const selectSortDirection = (state: TStore) => state.sort.direction;

const compareString = (a: string, b: string): number => {
  return a.localeCompare(b);
};

const compareNumbers = (a: number, b: number): number => {
  return a - b;
};

export const selectBasicCardsClanByFilter = createSelector(
  [selectBasicClanCurrentSort, selectSearchClansList],
  (activeSort, clans) => {
    if (activeSort.key === "name")
      return clans
        .slice()
        .sort((a, b) => compareString(a.mainInfo.name, b.mainInfo.name));

    if (activeSort.key === "tag")
      return clans
        .slice()
        .sort((a, b) => compareString(a.mainInfo.tag, b.mainInfo.tag));

    if (activeSort.key === "capitalLevel")
      return clans
        .slice()
        .sort((a, b) => compareNumbers(a.mainInfo.capital.value, b.mainInfo.capital.value));

    if (activeSort.key === "level")
      return clans
        .slice()
        .sort((a, b) => compareNumbers(a.otherInfo.level.value, b.otherInfo.level.value));

    if (activeSort.key === "members")
      return clans
        .slice()
        .sort((a, b) => compareNumbers(a.otherInfo.members.value, b.otherInfo.members.value));

    if (activeSort.key === "trophies")
      return clans
        .slice()
        .sort((a, b) => compareNumbers(a.trophies.main.value, b.trophies.main.value));

    if (activeSort.key === "versusTrophies")
      return clans
        .slice()
        .sort((a, b) => compareNumbers(a.trophies.versus.value, b.trophies.versus.value));

    if (activeSort.key === "capitalTrophies")
      return clans
        .slice()
        .sort((a, b) => compareNumbers(a.trophies.capital.value, b.trophies.capital.value));

    return clans;
  }
);

export const selectBasicCardsPlayerByFilter = createSelector(
  [selectBasicClanCurrentSort, selectSearchPlayersList],
  (activeSort, players) => {
    if (activeSort.key === "name")
      return players
        .slice()
        .sort((a, b) => a.mainInfo.name.localeCompare(b.mainInfo.name));

    if (activeSort.key === "tag")
      return players
        .slice()
        .sort((a, b) => a.mainInfo.tag.localeCompare(b.mainInfo.tag));

    if (activeSort.key === "level")
      return players
        .slice()
        .sort((a, b) => a.otherInfo.level.value - b.otherInfo.level.value);

    if (activeSort.key === "stars")
      return players
        .slice()
        .sort((a, b) => a.otherInfo.stars.value - b.otherInfo.stars.value);

    if (activeSort.key === "townhall")
      return players
        .slice()
        .sort((a, b) => a.mainInfo.townHall.value - b.mainInfo.townHall.value);

    if (activeSort.key === "trophies")
      return players
        .slice()
        .sort((a, b) => a.trophies.main.value - b.trophies.main.value);

    if (activeSort.key === "versusTrophies")
      return players
        .slice()
        .sort((a, b) => a.trophies.versus.value - b.trophies.versus.value);

    if (activeSort.key === "mainLegend")
      return players
        .slice()
        .sort(
          (a, b) => a.trophies.mainLegend.value - b.trophies.mainLegend.value
        );

    return players;
  }
);

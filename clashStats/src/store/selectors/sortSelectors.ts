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

const compareString = (
  a: string,
  b: string,
  direction: "more" | "less"
): number => {
  if (direction === "more") return a.localeCompare(b);
  return b.localeCompare(a);
};

const compareNumbers = (
  a: number,
  b: number,
  direction: "more" | "less"
): number => {
  if (direction === "more") return a - b;
  return b - a;
};

export const selectBasicCardsClanByFilter = createSelector(
  [selectBasicClanCurrentSort, selectSearchClansList, selectSortDirection],
  (activeSort, clans, sortDirection) => {
    if (activeSort.key === "name")
      return clans
        .slice()
        .sort((a, b) =>
          compareString(a.mainInfo.name, b.mainInfo.name, sortDirection)
        );

    if (activeSort.key === "tag")
      return clans
        .slice()
        .sort((a, b) =>
          compareString(a.mainInfo.tag, b.mainInfo.tag, sortDirection)
        );

    if (activeSort.key === "capitalLevel")
      return clans
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.mainInfo.capital.value,
            b.mainInfo.capital.value,
            sortDirection
          )
        );

    if (activeSort.key === "level")
      return clans
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.otherInfo.level.value,
            b.otherInfo.level.value,
            sortDirection
          )
        );

    if (activeSort.key === "members")
      return clans
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.otherInfo.members.value,
            b.otherInfo.members.value,
            sortDirection
          )
        );

    if (activeSort.key === "trophies")
      return clans
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.trophies.main.value,
            b.trophies.main.value,
            sortDirection
          )
        );

    if (activeSort.key === "versusTrophies")
      return clans
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.trophies.versus.value,
            b.trophies.versus.value,
            sortDirection
          )
        );

    if (activeSort.key === "capitalTrophies")
      return clans
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.trophies.capital.value,
            b.trophies.capital.value,
            sortDirection
          )
        );

    return clans;
  }
);

export const selectBasicCardsPlayerByFilter = createSelector(
  [selectBasicClanCurrentSort, selectSearchPlayersList, selectSortDirection],
  (activeSort, players, sortDirection) => {
    if (activeSort.key === "name")
      return players
        .slice()
        .sort((a, b) =>
          compareString(a.mainInfo.name, b.mainInfo.name, sortDirection)
        );

    if (activeSort.key === "tag")
      return players
        .slice()
        .sort((a, b) =>
          compareString(a.mainInfo.tag, b.mainInfo.tag, sortDirection)
        );

    if (activeSort.key === "level")
      return players
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.otherInfo.level.value,
            b.otherInfo.level.value,
            sortDirection
          )
        );

    if (activeSort.key === "stars")
      return players
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.otherInfo.stars.value,
            b.otherInfo.stars.value,
            sortDirection
          )
        );

    if (activeSort.key === "townhall")
      return players
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.mainInfo.townHall.value,
            b.mainInfo.townHall.value,
            sortDirection
          )
        );

    if (activeSort.key === "trophies")
      return players
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.trophies.main.value,
            b.trophies.main.value,
            sortDirection
          )
        );

    if (activeSort.key === "versusTrophies")
      return players
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.trophies.versus.value,
            b.trophies.versus.value,
            sortDirection
          )
        );

    if (activeSort.key === "mainLegend")
      return players
        .slice()
        .sort((a, b) =>
          compareNumbers(
            a.trophies.mainLegend.value,
            b.trophies.mainLegend.value,
            sortDirection
          )
        );

    return players;
  }
);

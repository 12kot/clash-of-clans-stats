import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectSearchPlayersLoading } from "store/selectors/searchSelectors";
import PlayerFilters from "components/search/filters/PlayerFilters";
import { getSearchPlayers } from "../service/search.service";
import SearchContainer from "./SearchContainer";
import { selectBasicCardsPlayerByFilter } from "store/selectors/sortSelectors";

const SearchPlayers = (): ReactElement => {
  const list = useAppSelector(selectBasicCardsPlayerByFilter);
  const loading = useAppSelector(selectSearchPlayersLoading);

  return (
    <SearchContainer
      Filters={PlayerFilters}
      cards={getSearchPlayers({list, loading})}
      type={"basicPlayer"}
    />
  );
};

export default SearchPlayers;

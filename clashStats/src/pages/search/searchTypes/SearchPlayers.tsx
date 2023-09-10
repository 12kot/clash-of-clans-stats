import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectSearchPlayers } from "store/selectors/searchSelectors";
import PlayerFilters from "components/search/filters/PlayerFilters";
import { getSearchPlayers } from "../service/search.service";
import SearchContainer from "./SearchContainer";

const SearchPlayers = (): ReactElement => {
  const players = useAppSelector(selectSearchPlayers);

  return (
    <SearchContainer
      Filters={PlayerFilters}
      cards={getSearchPlayers(players)}
    />
  );
};

export default SearchPlayers;

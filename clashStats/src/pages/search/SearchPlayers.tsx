import React from "react";
import Search from "./Search";
import { useAppSelector } from "hooks/store";
import { selectBasicCardsPlayerByFilter } from "store/selectors/sortSelectors";
import { selectSearchPlayersLoading } from "store/selectors/searchSelectors";
import SearchContainer from "./searchTypes/SearchContainer";
import { getSearchPlayers } from "./service/search.service";
import PlayerFilters from "components/search/filters/PlayerFilters";
import { useSearchParams } from "react-router-dom";

const SearchPlayers = () => {
  const list = useAppSelector(selectBasicCardsPlayerByFilter);
  const loading = useAppSelector(selectSearchPlayersLoading);

  const [searchParams] = useSearchParams();
  const value: string = searchParams.get("name") || "";

  return (
    <Search
      SearchElement={
        <SearchContainer
          Filters={<PlayerFilters initValue={value} />}
          cards={getSearchPlayers({ list, loading })}
          type={"basicPlayer"}
        />
      }
      type={"player"}
    />
  );
};

export default SearchPlayers;

import React from "react";
import Search from "./Search";
import { useAppSelector } from "hooks/store";
import { selectBasicCardsClanByFilter } from "store/selectors/sortSelectors";
import { selectSearchClansLoading } from "store/selectors/searchSelectors";
import SearchContainer from "./searchTypes/SearchContainer";
import ClanFilters from "components/search/filters/ClanFilters";
import { getSearchClans } from "./service/search.service";
import { useSearchParams } from "react-router-dom";

const SearchClans = () => {
  const list = useAppSelector(selectBasicCardsClanByFilter);
  const loading = useAppSelector(selectSearchClansLoading);

  const [searchParams] = useSearchParams();
  const value: string = searchParams.get("name") || "";

  return (
    <Search
      SearchElement={
        <SearchContainer
          Filters={<ClanFilters initValue={value} />}
          cards={getSearchClans({ list, loading })}
          type={"basicClan"}
        />
      }
      type={"clan"}
    />
  );
};

export default SearchClans;

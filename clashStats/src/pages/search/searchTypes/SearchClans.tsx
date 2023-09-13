import React, { ReactElement } from "react";
import { useAppSelector } from "hooks/store";
import { selectSearchClans } from "store/selectors/searchSelectors";
import ClanFilters from "components/search/filters/ClanFilters";
import { getSearchClans } from "../service/search.service";
import SearchContainer from "./SearchContainer";

const SearchClans = (): ReactElement => {
  const clans = useAppSelector(selectSearchClans);

  return (
    <SearchContainer
      Filters={ClanFilters}
      cards={getSearchClans(clans)}
      type={"basicClan"}
    />
  );
};

export default SearchClans;

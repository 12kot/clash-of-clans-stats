import React, { ReactElement } from "react";
import { useAppSelector } from "hooks/store";
import ClanFilters from "components/search/filters/ClanFilters";
import { getSearchClans } from "../service/search.service";
import SearchContainer from "./SearchContainer";
import { selectBasicCardsClanByFilter } from "store/selectors/sortSelectors";
import { selectSearchClansLoading } from "store/selectors/searchSelectors";

const SearchClans = (): ReactElement => {
  const list = useAppSelector(selectBasicCardsClanByFilter);
  const loading = useAppSelector(selectSearchClansLoading);

  return (
    <SearchContainer
      Filters={ClanFilters}
      cards={getSearchClans({list, loading})}
      type={"basicClan"}
    />
  );
};

export default SearchClans;

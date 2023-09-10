import React, { ReactElement } from "react";
import { useAppSelector } from "hooks/store";
import { selectSearchClans } from "store/selectors/searchSelectors";
import ClanFilters from "components/search/filters/ClanFilters";
import { getSearchClans } from "../service/search.service";
import SearchContainer from "./SearchContainer";

const SearchClans = (): ReactElement => {
  const clans = useAppSelector(selectSearchClans);

  // {clans.list.length !== 0 && (
  //   <section className={styles.displaySettings}>
  //     <p>Sort by name</p>
  //     <p>Cubes</p>
  //   </section>
  // )}

  return (
    <SearchContainer Filters={ClanFilters} cards={getSearchClans(clans)} />
  );
};

export default SearchClans;

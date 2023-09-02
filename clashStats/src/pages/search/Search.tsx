import React, { ReactElement } from "react";
import styles from "./Search.module.scss";
import SearchHeader from "./header/SearchHeader";
import ClanFilters from "./clanFilters/ClanFilters";
import Card from "components/card/Card";
import { useAppSelector } from "hooks/store";
import { selectSearchClans } from "store/selectors/searchSelectors";

const Search = (): ReactElement => {
  const clans = useAppSelector(selectSearchClans);

  console.log(clans.list)
  return (
    <main className={styles.container}>
      <SearchHeader />
      <ClanFilters />
      <article className={styles.cards}>
        {clans.list.map((clan) => <Card {...clan} loading={clans.loading} />)}
      </article>
    </main>
  );
};

export default Search;

import React, { ReactElement } from "react";
import styles from "./SearchTypes.module.scss";
import { useAppSelector } from "hooks/store";
import { selectSearchClans } from "store/selectors/searchSelectors";
import ClanFilters from "components/search/filters/ClanFilters";
import { getSearchClans } from "../service/search.service";

const SearchClans = (): ReactElement => {
  const clans = useAppSelector(selectSearchClans);

  return (
    <main className={styles.container}>
      <ClanFilters />
      {clans.list.length !== 0 && (
        <section className={styles.displaySettings}>
          <p>Sort by name</p>
          <p>Cubes</p>
        </section>
      )}
      <article className={styles.cards}>{getSearchClans(clans)}</article>
    </main>
  );
};

export default SearchClans;

import React, { ReactElement } from "react";
import styles from "./Search.module.scss";
import Card from "components/card/Card";
import { v4 } from "uuid";
import { TSearchCard } from "types/types/slices/searchTypes";
import ClanFilters from "components/search/filters/clanFilters/ClanFilters";
import { useAppSelector } from "hooks/store";
import { selectSearchClans } from "store/selectors/searchSelectors";

const getClans = (clans: TSearchCard) => {
  return clans.list.map((clan) => (
    <Card {...clan} loading={clans.loading} key={v4()} />
  ));
};

const SearchClans = (): ReactElement => {
  const clans = useAppSelector(selectSearchClans);

  return (
    <main className={styles.container}>
      <ClanFilters />
      <article className={styles.cards}>{getClans(clans)}</article>
    </main>
  );
};

export default SearchClans;

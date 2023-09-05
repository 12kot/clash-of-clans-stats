import React, { ReactElement } from "react";
import styles from "./SearchTypes.module.scss";
import Card from "components/card/Card";
import { v4 } from "uuid";
import { TSearchCard } from "types/types/slices/searchTypes";
import { useAppSelector } from "hooks/store";
import { selectSearchClans } from "store/selectors/searchSelectors";
import ClanFilters from "components/search/filters/ClanFilters";
import { InitCard } from "types/initial/card/cardInitial";

const getClans = (clans: TSearchCard) => {
  if (clans.loading)
    return [...Array(3)].map(() => <Card {...InitCard} loading={true} key={v4()} />);
  if (clans.list.length === 0)
    return <h1 className={styles.emptyList}>There's nothing here</h1>;


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

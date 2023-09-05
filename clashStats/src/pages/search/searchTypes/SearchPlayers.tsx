import Card from "components/card/Card";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectSearchPlayers } from "store/selectors/searchSelectors";
import { TSearchCard } from "types/types/slices/searchTypes";
import { v4 } from "uuid";
import styles from "./SearchTypes.module.scss";
import PlayerFilters from "components/search/filters/PlayerFilters";
import { InitCard } from "types/initial/card/cardInitial";

const getPlayers = (players: TSearchCard): ReactElement[] | ReactElement => {
  if (players.loading)
    return [...Array(3)].map(() => <Card {...InitCard} loading={true} key={v4()}/>);
  if (players.list.length === 0)
    return <h1 className={styles.emptyList}>There's nothing here</h1>;

  return players.list.map((clan) => (
    <Card {...clan} loading={players.loading} key={v4()} />
  ));
};

const SearchPlayers = (): ReactElement => {
  const players = useAppSelector(selectSearchPlayers);

  return (
    <main className={styles.container}>
      <PlayerFilters />
      <article className={styles.cards}>{getPlayers(players)}</article>
    </main>
  );
};

export default SearchPlayers;

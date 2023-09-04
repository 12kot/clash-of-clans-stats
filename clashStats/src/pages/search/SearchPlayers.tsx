import Card from 'components/card/Card';
import { useAppSelector } from 'hooks/store';
import React, { ReactElement } from 'react'
import { selectSearchPlayers } from 'store/selectors/searchSelectors';
import { TSearchCard } from 'types/types/slices/searchTypes';
import { v4 } from 'uuid';
import styles from "./Search.module.scss"
import PlayerFilters from 'components/search/filters/PlayerFilters';

const getPlayers = (clans: TSearchCard) => {
    return clans.list.map((clan) => (
      <Card {...clan} loading={clans.loading} key={v4()} />
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
}

export default SearchPlayers
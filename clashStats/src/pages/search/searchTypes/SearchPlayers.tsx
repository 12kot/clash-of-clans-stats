import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectSearchPlayers } from "store/selectors/searchSelectors";
import styles from "./SearchTypes.module.scss";
import PlayerFilters from "components/search/filters/PlayerFilters";
//import { getSearchPlayers } from "../service/search.service";

const SearchPlayers = (): ReactElement => {
  const players = useAppSelector(selectSearchPlayers);

  return (
    <main className={styles.container}>
      <PlayerFilters />
      {/* <article className={styles.cards}>{getSearchPlayers(players)}</article> */}
    </main>
  );
};

export default SearchPlayers;

import React, { ReactElement } from "react";
import styles from "./Search.module.scss";
import SearchHeader from "./header/SearchHeader";
import ClanDetails from "./clanDetails/ClanDetails";

const Search = (): ReactElement => {
  return (
    <main className={styles.container}>
      <SearchHeader />
      <ClanDetails />
      <article className={styles.cards}>CARDS</article>
    </main>
  );
};

export default Search;

import React, { ReactElement } from "react";
import styles from "./Search.module.scss";
import SearchHeader from "./header/SearchHeader";
import ClanDetails from "./clanDetails/ClanDetails";
import Card from "components/card/Card";
import { InitCard } from "types/initial/card/cardInitial";
import Banner from "components/banner/Banner";

const Search = (): ReactElement => {
  return (
    <main className={styles.container}>
      <SearchHeader />
      <ClanDetails />
      <article className={styles.cards}>
        <Card {...InitCard} loading={true} />
        <Card {...InitCard} loading={true} />
        <Card {...InitCard} loading={true} />
        <Card {...InitCard} loading={true} />
        <Card {...InitCard} loading={true} />
      </article>
    </main>
  );
};

export default Search;

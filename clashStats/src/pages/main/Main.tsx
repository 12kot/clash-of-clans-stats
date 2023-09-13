import React, { ReactElement } from "react";
import styles from "./Main.module.scss";
import Banner from "components/banner/Banner";
import SearchMenu from "components/searchMenu/SearchMenu";
import TopStatisticItems from "./topStatistic/TopStatisticItems";

const Main = (): ReactElement => {
  return (
    <main className={styles.container}>
      <article className={styles.banner}>
        <Banner text="Clansify - your best stats" />
      </article>
      <SearchMenu />
      <TopStatisticItems />
    </main>
  );
};

export default Main;

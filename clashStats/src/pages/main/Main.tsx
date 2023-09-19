import React, { ReactElement } from "react";
import styles from "./Main.module.scss";
import Banner from "layouts/banner/Banner";
import TopStatisticItems from "./topStatistic/TopStatisticItems";
import SearchMenu from "layouts/searchMenu/SearchMenu";

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

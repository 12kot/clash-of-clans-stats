import React, { ReactElement } from "react";
import styles from "./Main.module.scss";
import Banner from "components/banner/Banner";
import SearchMenu from "./searchMenu/SearchMenu";

const Main = (): ReactElement => {
  return (
    <main className={styles.container}>
      <article className={styles.banner}>
        <Banner text="Book of stats - best stats" />
      </article>
      <SearchMenu />
      <article className={styles.top}></article>
    </main>
  );
};

export default Main;

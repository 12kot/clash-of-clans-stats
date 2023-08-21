import React, { ReactElement } from "react";
import styles from "./Main.module.scss";
import Banner from "components/banner/Banner";
import SearchMenu from "components/searchMenu/SearchMenu";

const Main = (): ReactElement => {
  return (
    <main className={styles.container}>
      <article className={styles.banner}>
        <Banner text="Book of stats - best stats" />
      </article>
      <SearchMenu />
      <article className={styles.topStats}>
        <section className={styles.item}>
          <header className={styles.header}>
            <h2>Самый популярный клан</h2>
          </header>

          <div className={styles.content}></div>
        </section>

        <section className={styles.item}>
          <header className={styles.header}>
            <h2>Самый популярный игрок</h2>
          </header>

          <div className={styles.content}></div>
        </section>

        <section className={styles.item}>
          <header className={styles.header}>
            <h2>Лучший игрок</h2>
          </header>

          <div className={styles.content}></div>
        </section>
      </article>
    </main>
  );
};

export default Main;

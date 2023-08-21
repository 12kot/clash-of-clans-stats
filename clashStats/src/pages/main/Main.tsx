import React, { ReactElement, useState } from "react";
import styles from "./Main.module.scss";
import Banner from "components/banner/Banner";
import Input from "components/input/Input";

const Main = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<"PLAYER" | "CLAN">("PLAYER");

  return (
    <main className={styles.container}>
      <article className={styles.banner}>
        <Banner text="Book of stats - best stats" />
      </article>
      <article className={styles.search}>
        <section className={styles.items}>
          <button className={`${styles.item} ${activeButton === "PLAYER" && styles.active}`} onClick={() => setActiveButton("PLAYER")}>Player</button>
          <button className={`${styles.item} ${activeButton === "CLAN" && styles.active}`} onClick={() => setActiveButton("CLAN")}>Clan</button>
        </section>
        {activeButton === "PLAYER" && <Input placeholder="PLAYER"/>}
        {activeButton === "CLAN" && <Input placeholder="CLAN"/>}
      </article>
      <article className={styles.top}></article>
    </main>
  );
};

export default Main;

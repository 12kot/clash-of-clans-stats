import React, { ReactElement } from "react";
import styles from "./Main.module.scss";
import Banner from "components/banner/Banner";

const Main = (): ReactElement => {
  return (
    <main className={styles.container}>
      <div className={styles.banner}>
        <Banner text="Book of stats - best stats"/>
      </div>
      sfsgfedg
    </main>
  );
};

export default Main;

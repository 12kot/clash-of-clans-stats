import React, { ReactElement } from "react";
import styles from "./Main.module.scss";
import About from "./about/About";
import Table from "components/table/Table";

const Main = (): ReactElement => {
  return (
    <main className={styles.container}>
      <About />
      <div className={styles.table}>
        <Table />
      </div>
    </main>
  );
};

export default Main;

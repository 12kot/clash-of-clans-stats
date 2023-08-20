import React, { ReactElement } from "react";
import styles from "./Main.module.scss";
import About from "./about/About";
import Table from "./table/Table";

const Main = (): ReactElement => {
  return (
    <main className={styles.container}>
      <About />
      <Table />
    </main>
  );
};

export default Main;

import React, { ReactElement } from "react";
import styles from "./Table.module.scss";

import Header from "./header/Header";
import Thead from "./thead/Thead";
import Tbody from "./tbody/Tbody";

const Table = (): ReactElement => {
  return (
    <article className={styles.tableContainer}>
     <Header />
      <div className={styles.table}>
        <table>
          <Thead />
          <Tbody />
        </table>
      </div>
    </article>
  );
};

export default Table;

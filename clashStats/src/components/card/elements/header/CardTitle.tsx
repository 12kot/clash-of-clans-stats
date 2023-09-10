import React from "react";
import styles from "./CardTitle.module.scss";

const CardTitle = ({header}: {header: string}) => {
  return (
    <header className={styles.header}>
      <h2>{header}</h2>
    </header>
  );
};

export default CardTitle;

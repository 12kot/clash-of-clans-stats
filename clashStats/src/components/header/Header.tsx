import React, { ReactElement } from "react";
import styles from "./Header.module.scss";

const Header = (): ReactElement => {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>LOGO</h1>
    </header>
  );
};

export default Header;

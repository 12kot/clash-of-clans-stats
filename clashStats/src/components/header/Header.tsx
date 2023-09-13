import React, { ReactElement } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (): ReactElement => {
  return (
    <div className={styles.container}>
      <NavLink to="/" className={styles.logo}>
        <h1>CLANSIFY</h1>
      </NavLink>
    </div>
  );
};

export default Header;

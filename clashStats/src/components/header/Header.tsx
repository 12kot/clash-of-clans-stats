import React, { ReactElement } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = (): ReactElement => {
  return (
    <NavLink to="/" className={styles.container}>
      <h1 className={styles.logo}>LOGO</h1>
    </NavLink>
  );
};

export default Header;

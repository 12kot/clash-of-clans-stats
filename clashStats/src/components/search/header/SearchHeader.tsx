import React, { ReactElement } from "react";
import styles from "./SearchHeader.module.scss";
import { NavLink } from "react-router-dom";

type TActive = string;

type Props = {
  active?: TActive;
};

const getOtherText = (active?: TActive): string => {
  if (active === "clan") return "player";
  return "clan";
};

const SearchHeader = ({ active }: Props): ReactElement => {
  return (
    <header className={styles.header}>
      <p className={styles.main}>{active && active.toUpperCase()}</p>
      <ul className={styles.buttons}>
        <NavLink to={`/search/${getOtherText(active)}`}>
          <li className={styles.item}>
            <p>Search {getOtherText(active)}</p>
          </li>
        </NavLink>
      </ul>
    </header>
  );
};

export default SearchHeader;

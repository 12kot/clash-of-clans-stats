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
      <p className={styles.main}>SEARCH {active && active.toUpperCase()}</p>
      <ul className={styles.buttons}>
        <li className={styles.item}>
          <NavLink to={`/search/${getOtherText(active)}`}>
            <p>Search {getOtherText(active)}</p>
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default SearchHeader;

import React from 'react'
import styles from "./SearchHeader.module.scss";
import { NavLink } from 'react-router-dom';

const SearchHeader = () => {
  return (
    <header className={styles.header}>
        <p className={styles.main}>SEARCH CLAN</p>
        <ul className={styles.buttons}>
          <li className={styles.item}>
            <NavLink to="/search/clan">CLANS</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/search/clan">CLANS</NavLink>
          </li>
          <li className={styles.item}>
            <NavLink to="/search/clan">CLANS</NavLink>
          </li>
        </ul>
      </header>
  )
}

export default SearchHeader
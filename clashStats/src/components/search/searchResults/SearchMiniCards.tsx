import React, { ReactElement } from "react";
import styles from "./SearchMiniCards.module.scss";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { TMiniCard } from "types/types/card/cardTypes";
import { TSearchButton } from "types/types";
import SearchMiniCardItem from "./searchMiniCardItem/SearchMiniCardItem";

type Props = {
  items: TMiniCard[];
  link: TSearchButton;
};

const getCards = (items: TMiniCard[], link: string): ReactElement[] => {
  return items.map((item) => (
    <SearchMiniCardItem
      item={item.img}
      link={`/${link}/${item.tag}`}
      name={item.name}
      tag={item.tag}
      key={v4()}
    />
  ));
};

const SearchMiniCards = ({ items, link }: Props): ReactElement => {
  return (
    <>
      {getCards(items, link)}
      {items.length !== 0 && (
        <NavLink
          to={`/search/${link}`}
          className={`${styles.resultItem} ${styles.fixed}`}
        >
          <p>All results →</p>
        </NavLink>
      )}
    </>
  );
};

export default SearchMiniCards;

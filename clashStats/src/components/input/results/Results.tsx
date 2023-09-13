import React, { ReactElement } from "react";
import styles from "./Results.module.scss";
import { NavLink } from "react-router-dom";
import InputSearchResultItem from "./item/Item";
import { v4 } from "uuid";
import { TMiniCard } from "types/types/card/cardTypes";

type Props = {
  items: TMiniCard[];
  link: string;
  value: string;
};

const getResults = (items: TMiniCard[], link: string): ReactElement[] => {
  return items.map((item) => (
    <InputSearchResultItem
      item={item.img}
      link={`/${link}/${item.tag}`}
      name={item.name}
      tag={item.tag}
      key={v4()}
    />
  ));
};

const InputSearchResults = ({ items, value, link }: Props): ReactElement => {
  return (
    <>
      {getResults(items, link)}
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

export default InputSearchResults;

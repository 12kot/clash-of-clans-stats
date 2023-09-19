import React, { ReactElement } from "react";
import styles from "../SearchMiniCards.module.scss";
import { NavLink } from "react-router-dom";
import { TCardItem } from "types/types/card/basic/cardBasicTypes";

type Props = {
  item: TCardItem;
  name: string;
  tag: string
  link: string
};

const getImg = (item: TCardItem) => {
  return (
    <img
      src={item.img}
      alt={item.title}
      title={item.title}
    ></img>
  );
};

const SearchMiniCardItem = ({ item, name, tag, link}: Props): ReactElement => {
  return (
    <NavLink to={`${link}`} className={styles.resultItem}>
      {getImg(item)}
      <div className={styles.name}>
        {name}
        <span className={styles.tag}>{tag}</span>
      </div>
    </NavLink>
  );
};

export default SearchMiniCardItem;

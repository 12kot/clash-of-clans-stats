import React, { ReactElement } from "react";
import styles from "../Results.module.scss";
import { NavLink } from "react-router-dom";
import { CardType } from "types/cardTypes";

type Props = {
  item: CardType;
  type: string;
};

const Item = ({ item, type }: Props): ReactElement => {
  return (
    <NavLink
      to={`/${type}/${item.headerCard.object.tag}`}
      className={styles.resultItem}
    >
      <img src={item.headerCard.object.img} alt=""></img>
      <div className={styles.name}>
        {item.headerCard.object.name}
        <span className={styles.tag}>{item.headerCard.object.tag}</span>
      </div>
    </NavLink>
  );
};

export default Item;

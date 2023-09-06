import React, { ReactElement } from "react";
import styles from "../Results.module.scss";
import { NavLink } from "react-router-dom";
import { TCardHeader } from "types/types/card/cardTypes";

type Props = {
  item: TCardHeader;
  type: string;
};

const Item = ({ item, type }: Props): ReactElement => {
  return (
    <NavLink
      to={`/${type}/${item.object.tag}`}
      className={styles.resultItem}
    >
      <img src={item.object.img} alt=""></img>
      <div className={styles.name}>
        {item.object.name}
        <span className={styles.tag}>{item.object.tag}</span>
      </div>
    </NavLink>
  );
};

export default Item;

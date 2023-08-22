import React, { ReactElement } from "react";
import styles from "./CardItems.module.scss";
import { CardItemsType } from "types/cardTypes";

const getItems = (items: CardItemsType[]): ReactElement[] => {
  return items.map((item) => (
    <span className={styles.valueItem}>
      <img src={item.img} alt="" className={styles.icon} />
      {item.value}
    </span>
  ));
};

type Props = {
  items: CardItemsType[];
};

const CardItems = ({ items }: Props): ReactElement => {
  return <>{getItems(items)}</>;
};

export default CardItems;

import React, { ReactElement } from "react";
import styles from "./CardItems.module.scss";
import { CardItemsType } from "types/cardTypes";
import { v4 } from "uuid";

const getItems = (items: CardItemsType[]): ReactElement[] => {
  return items.map((item) => (
    <span className={styles.valueItem} key={v4()}>
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

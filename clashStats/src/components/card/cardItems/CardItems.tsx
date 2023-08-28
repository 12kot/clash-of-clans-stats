import React, { ReactElement } from "react";
import styles from "./CardItems.module.scss";
import { v4 } from "uuid";
import { TCardItem } from "types/types/card/cardTypes";

const getItems = (items: TCardItem[]): ReactElement[] => {
  return items.map((item) => (
    <span className={styles.valueItem} key={v4()}>
      <img src={item.img} alt="" className={styles.icon} />
      {item.value}
    </span>
  ));
};

type Props = {
  items: TCardItem[];
};

const CardItems = ({ items }: Props): ReactElement => {
  return <>{getItems(items)}</>;
};

export default CardItems;

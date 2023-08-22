import React, { ReactElement } from "react";
import styles from "./CardItems.module.scss";

type itemType = {
  img: string;
  value: number;
};

const getItems = (items: itemType[]): ReactElement[] => {
  return items.map((item) => (
    <span className={styles.valueItem}>
      <img src={item.img} alt="" className={styles.icon} />
      {item.value}
    </span>
  ));
};

type Props = {
  items: itemType[];
};

const CardItems = ({ items }: Props): ReactElement => {
  return <>{getItems(items)}</>;
};

export default CardItems;

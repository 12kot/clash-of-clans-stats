import React, { ReactElement } from "react";
import styles from "./CardItem.module.scss";
import { v4 } from "uuid";
import { TCardItem } from "types/types/card/basic/cardBasicTypes";

type Props = {
  item: TCardItem;
  otherInfo?: boolean;
};

const CardElementItem = ({ item, otherInfo }: Props): ReactElement => {
  return (
    <span className={`${styles.item} ${otherInfo && styles.other}`} key={v4()}>
      <img src={item.img} alt={item.title} className={styles.icon} />
      <p className={styles.value}>{item.value}</p>
    </span>
  );
};

export default CardElementItem;

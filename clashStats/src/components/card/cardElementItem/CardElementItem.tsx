import React, { ReactElement } from "react";
import styles from "./CardElementItem.module.scss";
import { v4 } from "uuid";
import { TCardItem } from "types/types/card/basic/cardBasicTypes";

type Props = {
  item: TCardItem;
};

const CardElementItem = ({ item }: Props): ReactElement => {
  return (
    <span className={styles.item} key={v4()}>
      <img src={item.img} alt={item.title} className={styles.icon} />
      {item.value}
    </span>
  );
};

export default CardElementItem;

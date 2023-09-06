import React, { ReactElement } from "react";
import styles from "./CardItems.module.scss";
import { v4 } from "uuid";
import {
  TCardClanOtherInfo,
  TCardClanTrophies,
  TCardPlayerOtherInfo,
  TCardPlayerTrophies,
} from "types/types/card/cardTypes";

const getItems = ({ items }: Props): ReactElement[] => {
  const result = [];
  for (const item of Object.values(items)) {
    result.push(
      <span className={styles.valueItem} key={v4()}>
        <img src={item.img} alt="" className={styles.icon} />
        {item.value}
      </span>
    );
  }

  return result;
};

type Props = {
  items:
    | TCardPlayerTrophies
    | TCardPlayerOtherInfo
    | TCardClanTrophies
    | TCardClanOtherInfo;
};

const CardItems = ({ items }: Props): ReactElement => {
  return <>{getItems({ items })}</>;
};

export default CardItems;

import React, { ReactElement } from "react";
import styles from "./TopStatisticItems.module.scss";
import { CardType } from "types/cardTypes";
import Card from "components/cards/Card";
import { useAppSelector } from "hooks/store";

const TopStatisticItems = (): ReactElement => {
  const card = useAppSelector((state) => state.app.card);

  return (
    <article className={styles.topStats}>
      <Card {...(card as CardType)} />
      <Card {...(card as CardType)} />
      <Card {...(card as CardType)} />
      
    </article>
  );
};

export default TopStatisticItems;

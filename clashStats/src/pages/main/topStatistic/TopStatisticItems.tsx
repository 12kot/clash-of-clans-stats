import React, { ReactElement } from "react";
import styles from "./TopStatisticItems.module.scss";
import Card from "components/cards/Card";
import { useAppSelector } from "hooks/store";

const TopStatisticItems = (): ReactElement => {
  const cards = useAppSelector((state) => state.app.cards);

  return (
    <article className={styles.topStats}>
      {cards.map((card) => (
        <Card {...card} />
      ))}
    </article>
  );
};

export default TopStatisticItems;

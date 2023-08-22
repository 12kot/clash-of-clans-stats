import React, { ReactElement } from "react";
import styles from "./Card.module.scss";
import CardHeader from "components/card/cardHeader/CardHeader";
import CardItems from "components/card/cardItems/CardItems";
import ClanLabels from "components/card/clanLabels/ClanLabels";
import { CardType } from "types/cardTypes";

const Card = ({
  header,
  headerCard,
  trophies,
  otherInfo,
  labels,
}: CardType): ReactElement => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>{header}</h2>
      </header>

      <main className={styles.content}>
        <CardHeader {...headerCard} />
        <section className={styles.values}>
          <CardItems items={trophies} />
        </section>

        <section className={styles.values}>
          <CardItems items={otherInfo} />
          <ClanLabels labels={labels} />
        </section>
      </main>
    </section>
  );
};

export default Card;

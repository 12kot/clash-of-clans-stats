import React, { ReactElement } from "react";
import styles from "./Card.module.scss";
import CardHeader from "components/card/cardHeader/CardHeader";
import CardItems from "components/card/cardItems/CardItems";
import Labels from "components/card/labels/Labels";
import { CardType } from "types/cardTypes";

const Card = ({
  header,
  img,
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
          <Labels labels={labels} />
        </section>
      </main>
      <img src={img} alt="" className={styles.banner} />
    </section>
  );
};

export default Card;

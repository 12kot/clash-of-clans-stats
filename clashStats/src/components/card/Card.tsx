import React, { ReactElement } from "react";
import styles from "./Card.module.scss";
import CardHeader from "components/card/cardHeader/CardHeader";
import CardItems from "components/card/cardItems/CardItems";
import Labels from "components/labels/Labels";
import { CardType } from "types/cardTypes";
import Loader from "components/loader/Loader";

interface Props extends CardType {
  header: string;
  loading: boolean;
}

const Card = ({
  header,
  img,
  headerCard,
  trophies,
  otherInfo,
  labels,
  loading,
}: Props): ReactElement => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <h2>{header}</h2>
      </header>

      <main className={styles.content}>
        {loading ? (
          <Loader size="24px" weight="3px" />
        ) : (
          <>
            <CardHeader {...headerCard} />
            <section className={styles.values}>
              <CardItems items={trophies} />
            </section>

            <section className={styles.values}>
              <CardItems items={otherInfo} />
              <Labels labels={labels} />
            </section>
          </>
        )}
      </main>
      <img src={img} alt="" className={styles.banner} />
    </section>
  );
};

export default Card;

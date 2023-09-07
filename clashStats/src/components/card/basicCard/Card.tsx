import React, { ReactElement } from "react";
import styles from "./Card.module.scss";
import CardHeader from "components/card/basicCard/cardHeader/CardHeader";
import CardItems from "components/card/cardItems/CardItems";
import Labels from "components/labels/Labels";
import Loader from "components/loader/Loader";
import { TCardClan, TCardPlayer } from "types/types/card/cardTypes";

interface Props {
  header?: string;
  card: TCardClan | TCardPlayer;
  loading: boolean;
}

const Card = ({
  card, loading, header
}: Props): ReactElement => {
  return (
    <section className={styles.container}>
      {!!header && <header className={styles.header}>
        <h2>{header}</h2>
      </header>}

      <main className={styles.content}>
        {loading ? (
          <Loader size="24px" weight="3px" />
        ) : (
          <>
            <CardHeader {...card.headerCard} />
            <section className={styles.values}>
              <CardItems items={card.trophies} />
            </section>

            <section className={styles.values}>
              <CardItems items={card.otherInfo} />
              <Labels labels={card.labels} />
            </section>
          </>
        )}
      </main>
      <img src={card.img} alt="" className={styles.banner} />
    </section>
  );
};

export default Card;

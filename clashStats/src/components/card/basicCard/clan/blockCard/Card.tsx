import React, { ReactElement } from "react";
import styles from "./Card.module.scss";
import BasicClanCardHeader from "components/card/basicCard/clan/blockCard/cardHeader/BlockCardHeader";
import Labels from "components/labels/Labels";
import { TBasicCardClan } from "types/types/card/basic/clan/basicClanCardTypes";
import CardElementItem from "components/card/cardElementItem/CardElementItem";
import AbsoluteImage from "components/card/absoluteImage/AbsoluteImage";

interface Props {
  header?: string;
  card: TBasicCardClan;
}

const CardBasicClan = ({ card, header }: Props): ReactElement => {
  return (
    <section className={styles.container}>
      {!!header && (
        <header className={styles.header}>
          <h2>{header}</h2>
        </header>
      )}

      <main className={styles.content}>
        <BasicClanCardHeader {...card.mainInfo} />
        <section className={styles.values}>
          <CardElementItem item={card.trophies.main} />
          <CardElementItem item={card.trophies.versus} />
          <CardElementItem item={card.trophies.capital} />
        </section>

        <section className={styles.values}>
          <CardElementItem item={card.otherInfo.level} />
          <CardElementItem item={card.otherInfo.members} />
          <Labels labels={card.labels} />
        </section>
      </main>
      <AbsoluteImage {...card.mainInfo.country} />
    </section>
  );
};

export default CardBasicClan;

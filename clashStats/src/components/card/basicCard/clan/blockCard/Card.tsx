import React, { ReactElement } from "react";
import styles from "./Card.module.scss";
import CardBasicClanHeader from "components/card/basicCard/clan/blockCard/cardHeader/BlockCardHeader";
import Labels from "components/labels/Labels";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import CardElementItem from "components/card/cardElementItem/CardElementItem";
import AbsoluteImage from "components/card/absoluteImage/AbsoluteImage";
import SpinLoader from "components/loader/spinLoader/Loader";

interface Props {
  header?: string;
  card: TCardBasicClan;
  loading: boolean;
}

const CardBasicClan = ({ card, header, loading }: Props): ReactElement => {
  return (
    <section className={styles.container}>
      {!!header && (
        <header className={styles.header}>
          <h2>{header}</h2>
        </header>
      )}

      <main className={styles.content}>
        {loading ? (
          <SpinLoader size="24px" weight="3px" />
        ) : (
          <>
            <CardBasicClanHeader {...card.mainInfo} />
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
          </>
        )}
      </main>
      <AbsoluteImage {...card.mainInfo.country} />
    </section>
  );
};

export default CardBasicClan;

import React, { ReactElement } from "react";
import styles from "./CardBasic.module.scss";
import CardTitle from "components/card/elements/header/CardTitle";
import CardBasicHeader from "../../clan/blockCard/cardHeader/BlockCardHeader";
import Labels from "components/labels/Labels";
import CardElementItem from "components/card/elements/cardElementItem/CardElementItem";
import AbsoluteImage from "components/card/elements/absoluteImage/AbsoluteImage";
import {
  TCardBasicGeneralized,
  TCardItem,
} from "types/types/card/basic/cardBasicTypes";
import { v4 } from "uuid";
import CardLoader from "components/loader/cardLoader/CardLoader";

interface Props extends TCardBasicGeneralized {
  header?: string;
  loading: boolean;
}

const getCardElements = (items: TCardItem[]): ReactElement[] => {
  return items.map((item) => <CardElementItem item={item} key={v4()} />);
};

const CardBasic = ({
  header,
  head,
  trophies,
  otherInfo,
  loading,
  labels,
  absoluteImg,
}: Props): ReactElement => {
  return (
    <section className={styles.container}>
      {!!header && <CardTitle header={header} />}

      {loading ? (
        <CardLoader />
      ) : (
        <main className={styles.content}>
          <span className={styles.head}>
            <CardBasicHeader {...head.info} />
            <Labels labels={head.labels} />
          </span>
          <section className={styles.values}>
            {getCardElements(trophies)}
          </section>

          <section className={styles.values}>
            {getCardElements(otherInfo)}
            <Labels labels={labels} />
          </section>
        </main>
      )}

      <AbsoluteImage {...absoluteImg} />
    </section>
  );
};

export default CardBasic;

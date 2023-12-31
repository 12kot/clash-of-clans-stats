import React, { ReactElement } from "react";
import styles from "./CardBasic.module.scss";
import CardHeader from "../../../elements/cardHeader/CardHeader";
import Labels from "components/labels/Labels";
import {
  TCardBasicGeneralized,
  TCardItem,
} from "types/types/card/basic/cardBasicTypes";
import { v4 } from "uuid";
import { TSearchButton } from "types/types";
import CardElementItem from "components/card/card/elements/cardElementItem/CardElementItem";
import CardTitle from "components/card/card/elements/header/CardTitle";
import AbsoluteImage from "components/card/card/elements/absoluteImage/AbsoluteImage";
import CardLoader from "components/loader/cardLoader/CardLoader";

interface Props extends TCardBasicGeneralized {
  header?: string;
  loading: boolean;
  type: TSearchButton;
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
  type,
}: Props): ReactElement => {
  if (loading) return <CardLoader header={header} />;

  return (
    <section className={styles.container}>
      {!!header && <CardTitle header={header} />}

      <main className={styles.content}>
        <span className={styles.head}>
          <CardHeader {...head.info} link={type} viewType="block" />
          <Labels labels={head.labels} />
        </span>
        <section className={styles.values}>{getCardElements(trophies)}</section>

        <section className={styles.values}>
          {getCardElements(otherInfo)}
          <Labels labels={labels} />
        </section>
      </main>

      <AbsoluteImage {...absoluteImg} />
    </section>
  );
};

export default CardBasic;

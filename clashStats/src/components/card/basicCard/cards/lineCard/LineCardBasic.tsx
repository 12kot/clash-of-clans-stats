import React, { ReactElement } from "react";
import styles from "./LineCardBasic.module.scss";
import Labels from "components/labels/Labels";
import CardElementItem from "../../../elements/cardElementItem/CardElementItem";
import CardHeader from "components/card/elements/cardHeader/CardHeader";
import {
  TCardBasicGeneralized,
  TCardItem,
} from "types/types/card/basic/cardBasicTypes";
import { TSearchButton } from "types/types";
import { v4 } from "uuid";
import LineCardLoader from "components/loader/cardLoader/lineCard/LineCardLoader";

interface Props extends TCardBasicGeneralized {
  type: TSearchButton;
  loading: boolean;
}

const getCardElements = (
  items: TCardItem[],
  isOther?: boolean
): ReactElement[] => {
  return items.map((item) => (
    <CardElementItem item={item} otherInfo={isOther} key={v4()} />
  ));
};

const LineCardBasic = ({
  loading,
  head,
  trophies,
  otherInfo,
  labels,
  absoluteImg,
  type,
}: Props): ReactElement => {
  if (loading) return <LineCardLoader />;

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={`${styles.item} ${styles.header}`}>
          <CardHeader {...head.info} link={type} viewType={"line"} />
        </span>
        <span className={`${styles.item} ${styles.itemLabels}`}>
          <Labels labels={head.labels} />
          {absoluteImg.img && (
            <Labels labels={[{ ...absoluteImg, id: absoluteImg.value }]} />
          )}
        </span>
        <span className={`${styles.item}`}>
          {getCardElements(otherInfo, true)}
        </span>
        <span className={`${styles.item}`}>{getCardElements(trophies)}</span>
        <span className={`${styles.item} ${styles.last}`}>
          <Labels labels={labels} />
        </span>
      </div>
    </section>
  );
};

export default LineCardBasic;

import React, { ReactElement } from "react";
import styles from "./LineCard.module.scss";
import Labels from "components/labels/Labels";
import { TBasicCardClan } from "types/types/card/basic/clan/basicClanCardTypes";
import LineCardBasicClandHeader from "./cardHeader/LineCardHeader";
import CardElementItem from "../../../cardElementItem/CardElementItem";

type Props = {
  card: TBasicCardClan;
};

const LineCardBasicClan = ({ card }: Props): ReactElement => {
  return (
    <div className={styles.container}>
      <span className={styles.item}>
        <LineCardBasicClandHeader {...card.mainInfo} />
      </span>
      <span className={styles.item}>
        <Labels labels={[{...card.mainInfo.capital, id: 0}]} />
      </span>
      <span className={styles.item}>
        <CardElementItem item={card.otherInfo.level} />
        <CardElementItem item={card.otherInfo.members} />
      </span>
      <span className={styles.item}>
        <CardElementItem item={card.trophies.main} />
        <CardElementItem item={card.trophies.versus} />
        <CardElementItem item={card.trophies.capital} />
      </span>
      <span className={`${styles.item} ${styles.last}`}>
        <Labels labels={card.labels} />
      </span>
    </div>
  );
};

export default LineCardBasicClan;

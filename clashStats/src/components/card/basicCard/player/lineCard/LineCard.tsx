import React, { ReactElement } from "react";
import styles from "./LineCard.module.scss";
import Labels from "components/labels/Labels";
import LineCardBasicPlayerdeader from "./cardHeader/LineCardHeader";
import CardElementItem from "../../../elements/cardElementItem/CardElementItem";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";

type Props = {
  card: TCardBasicPlayer;
};

const LineCardBasicPlayer = ({ card }: Props): ReactElement => {
  return (
    <div className={styles.container}>
      <span className={styles.item}>
        <LineCardBasicPlayerdeader {...card.mainInfo} />
      </span>
      <span className={styles.item}>
        <Labels labels={[{...card.mainInfo.clan, id: 0}]} />
      </span>
      <span className={styles.item}>
        <CardElementItem item={card.otherInfo.level} />
        <CardElementItem item={card.otherInfo.stars} />
      </span>
      <span className={styles.item}>
        <CardElementItem item={card.trophies.main} />
        <CardElementItem item={card.trophies.versus} />
        <CardElementItem item={card.trophies.mainLegend} />
      </span>
      <span className={`${styles.item} ${styles.last}`}>
        <Labels labels={card.labels} />
      </span>
    </div>
  );
};

export default LineCardBasicPlayer;

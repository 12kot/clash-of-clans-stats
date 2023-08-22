import React, { ReactElement } from "react";
import styles from "./TopStatisticItems.module.scss";
import MostPopularClan from "./MostPopularClan";
import MostPopularPlayer from "./MostPopularPlayer";
import TopPlayer from "./TopPlayer";

const TopStatisticItems = (): ReactElement => {
  return (
    <article className={styles.topStats}>
      <MostPopularClan />
      <MostPopularPlayer />
      <TopPlayer />
    </article>
  );
};

export default TopStatisticItems;

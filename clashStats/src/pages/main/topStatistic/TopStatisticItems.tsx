import React, { ReactElement } from "react";
import styles from "./TopStatisticItems.module.scss";
import TopPlayer from "components/cards/TopPlayer";
import PopularClan from "components/cards/PopularClan";
import PopularPlayer from "components/cards/PopularPlayer";

const TopStatisticItems = (): ReactElement => {
  return (
    <article className={styles.topStats}>
      <PopularClan />
      <PopularPlayer />
      <TopPlayer />
    </article>
  );
};

export default TopStatisticItems;

import React, { ReactElement } from "react";
import styles from "./TopStatisticItems.module.scss";
import PopularClan from "components/card/cards/PopularClan";
import PopularPlayer from "components/card/cards/PopularPlayer";
import TopPlayer from "components/card/cards/TopPlayer";

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

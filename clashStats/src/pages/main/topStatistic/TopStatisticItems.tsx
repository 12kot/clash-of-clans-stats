import React, { ReactElement } from "react";
import styles from "./TopStatisticItems.module.scss";
import ClanCard from "../../../components/cards/ClanCard/ClanCard";

const StatsJSON = [
  { header: "Самый популярный клан" },
  { header: "Самый популярный игрок" },
  { header: "Лучший игрок" },
  { header: "Лучший игрок" },
  { header: "Лучший игрок" },
  { header: "Лучший игрок" },
];

const TopStatisticItems = (): ReactElement => {
  return (
    <article className={styles.topStats}>
      {StatsJSON.map((stat, index) => (
        <ClanCard header={stat.header} key={index} />
      ))}
    </article>
  );
};

export default TopStatisticItems;

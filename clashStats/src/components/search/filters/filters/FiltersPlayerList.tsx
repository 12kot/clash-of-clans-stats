import React from "react";
import styles from "./FiltersList.module.scss";
import MainTrophiesFilter from "../filterList/trophy/MainTrophiesFilter";
import VersusTrophiesFilter from "../filterList/trophy/VersusTrophiesFilter";

import { useAppSelector } from "hooks/store";
import TownhallFilter from "../filterList/townhall/TownhallFilter";
import VersusTownhallFilter from "../filterList/townhall/VersusTownhallFilter";
import LevelFilter from "../filterList/level/LevelFilter";
import MainLegendTrophiesFilter from "../filterList/trophy/MainLegendTrophiesFilter";
import VersusLegendTrophiesFilter from "../filterList/trophy/VersusLegendTrophies";
import { selectFilterPlayer } from "store/selectors/filterSelectors";

const FiltersPlayerList = () => {
  const playerFilters = useAppSelector(selectFilterPlayer);

  return (
    <div className={styles.container}>
      <section className={`${styles.section} ${styles.active}`}>
        <h2>Details</h2>
        <ul className={styles.details}>
          <span className={styles.detailsItem}>
            <TownhallFilter item={playerFilters.details.townhall} />
          </span>
          <span className={styles.detailsItem}>
            <VersusTownhallFilter item={playerFilters.details.versusTownhall} />
          </span>
          <span className={styles.detailsItem}>
            <MainTrophiesFilter
              item={playerFilters.details.trophy}
              max={9000}
            />
          </span>
          <span className={styles.detailsItem}>
            <MainLegendTrophiesFilter
              item={playerFilters.details.legendaryTrophy}
              max={70000}
            />
          </span>
          <span className={styles.detailsItem}>
            <VersusTrophiesFilter
              item={playerFilters.details.versusTrophy}
              max={10000}
            />
          </span>
          <span className={styles.detailsItem}>
            <VersusLegendTrophiesFilter
              item={playerFilters.details.legendaryVersusTrophy}
              max={70000}
            />
          </span>
          <span className={styles.detailsItem}>
            <LevelFilter item={playerFilters.details.level} max={500} />
          </span>
        </ul>
      </section>
    </div>
  );
};

export default FiltersPlayerList;

import React from "react";
import styles from "./FiltersList.module.scss";
import MainTrophiesFilter from "../../filterList/clan/trophy/MainTrophiesFilter";
import VersusTrophiesFilter from "../../filterList/clan/trophy/VersusTrophiesFilter";
import CLanLevelFilter from "../../filterList/clan/level/CLanLevelFilter";

import { useAppSelector } from "hooks/store";
import TownhallFilter from "../../filterList/townhall/TownhallFilter";
import VersusTownhallFilter from "../../filterList/townhall/VersusTownhallFilter";

const FiltersPlayerList = () => {
  const state = useAppSelector((state) => state.filter.player);

  return (
    <div className={styles.container}>
      <section className={`${styles.section} ${styles.active}`}>
        <h2>Details</h2>
        <ul className={styles.details}>
          <span className={styles.detailsItem}>
            <TownhallFilter item={state.details.townhall} />
          </span>
          <span className={styles.detailsItem}>
            <VersusTownhallFilter item={state.details.versusTownhall} />
          </span>
          <span className={styles.detailsItem}>
            <MainTrophiesFilter item={state.details.townhall} />
          </span>
          <span className={styles.detailsItem}>
            <VersusTrophiesFilter item={state.details.townhall} />
          </span>
          <span className={styles.detailsItem}>
            <CLanLevelFilter item={state.details.townhall} />
          </span>
        </ul>
      </section>
    </div>
  );
};

export default FiltersPlayerList;

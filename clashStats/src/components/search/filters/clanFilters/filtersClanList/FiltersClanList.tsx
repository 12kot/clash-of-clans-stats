import React from "react";
import styles from "./FiltersList.module.scss";
import TownhallFilter from "../../filterList/townhall/TownhallFilter";
import MainTrophiesFilter from "../../filterList/clan/trophy/MainTrophiesFilter";
import VersusTrophiesFilter from "../../filterList/clan/trophy/VersusTrophiesFilter";
import CLanLevelFilter from "../../filterList/clan/level/CLanLevelFilter";
import CapitalFilter from "../../filterList/clan/townhall/CapitalFilter";
import ReqVersusTrophiesFilter from "../../filterList/clan/required/ReqVersusTrophiesFilter";
import ReqMainTrophiesFilter from "../../filterList/clan/required/ReqMainTrophiesFilter";
import { useAppSelector } from "hooks/store";

const FiltersClanList = () => {
  const state = useAppSelector((state) => state.filter.clan);

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>Required</h2>
        <ul className={styles.details}>
          <TownhallFilter item={state.required.townhall} />
          <ReqMainTrophiesFilter item={state.required.trophy} />
          <ReqVersusTrophiesFilter item={state.required.versusTrophy} />
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Details</h2>
        <ul className={styles.details}>
          <CapitalFilter item={state.details.capitalTownhall} />
          <MainTrophiesFilter item={state.details.trophy} />
          <VersusTrophiesFilter item={state.details.versusTrophy} />
          <CLanLevelFilter item={state.details.clanLevel} />
        </ul>
      </section>
    </div>
  );
};

export default FiltersClanList;

import React from "react";
import styles from "./FiltersClanList.module.scss";
import TownhallFilter from "../../filterList/townhall/TownhallFilter";
import MainTrophiesFilter from "../../filterList/clan/trophy/MainTrophiesFilter";
import VersusTrophiesFilter from "../../filterList/clan/trophy/VersusTrophiesFilter";
import CLanLevelFilter from "../../filterList/clan/level/CLanLevelFilter";
import CapitalFilter from "../../filterList/clan/townhall/CapitalFilter";
import ReqVersusTrophiesFilter from "../../filterList/clan/required/ReqVersusTrophiesFilter";
import ReqMainTrophiesFilter from "../../filterList/clan/required/ReqMainTrophiesFilter";

const FiltersClanList = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>Required</h2>
        <ul className={styles.details}>
          <TownhallFilter />
          <ReqMainTrophiesFilter />
          <ReqVersusTrophiesFilter />
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Details</h2>
        <ul className={styles.details}>
          <CapitalFilter />
          <MainTrophiesFilter />
          <VersusTrophiesFilter />
          <CLanLevelFilter />
        </ul>
      </section>
    </div>
  );
};

export default FiltersClanList;

import React from "react";
import styles from "./ClanFilters.module.scss";
import ClanFiltersInput from "./input/ClanFiltersInput";
import FiltersClanList from "./filtersClanList/FiltersClanList";
import AllLabels from "components/labels/allLabels/AllLabels";

const ClanFilters = () => {
  return (
    <article className={styles.detailsContainer}>
      <section className={styles.inputContainer}>
        <ClanFiltersInput />
        <FiltersClanList />
      </section>
      <span className={styles.labels}>
        <AllLabels />
      </span>
    </article>
  );
};

export default ClanFilters;

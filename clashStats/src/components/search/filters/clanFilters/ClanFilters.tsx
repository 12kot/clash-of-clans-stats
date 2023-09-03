import React, { ReactElement } from "react";
import styles from "../FiltersContainer.module.scss";
import ClanFiltersInput from "./input/ClanFiltersInput";
import FiltersClanList from "./filtersClanList/FiltersClanList";
import AllLabels from "components/labels/allLabels/AllLabels";

const ClanFilters = (): ReactElement => {
  return (
    <article className={styles.detailsContainer}>
      <section className={styles.inputContainer}>
        <span className={styles.input}>
          <button className={styles.button}>Apply Filters</button>
          <ClanFiltersInput />
        </span>
        <FiltersClanList />
      </section>
      <span className={styles.labels}>
        <AllLabels />
      </span>
    </article>
  );
};

export default ClanFilters;

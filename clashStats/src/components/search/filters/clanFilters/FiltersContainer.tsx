import React from "react";
import styles from "../FiltersContainer.module.scss";
import PlayerFiltersInput from "./input/SearchFiltersInput";
import ClanFiltersInput from "./input/ClanFiltersInput";
import FiltersPlayerList from "./filtersClanList/FiltersPlayerList";
import FiltersClanList from "./filtersClanList/FiltersClanList";
import AllLabels from "components/labels/allLabels/AllLabels";

type Props = {
  type: "clan" | "player";
};

const FiltersContainer = ({ type }: Props) => {
  return (
    <article className={styles.detailsContainer}>
      <section className={styles.inputContainer}>
        <span className={styles.input}>
          <button className={styles.button} onClick={() => {}}>
            Apply Filters
          </button>
          {type === "clan" ? <ClanFiltersInput /> : <PlayerFiltersInput />}
        </span>
        {type === "clan" ? (
          <FiltersClanList />
        ) : (
          <FiltersPlayerList />
        )}
      </section>
      <span className={styles.labels}>
        <AllLabels />
      </span>
    </article>
  );
};

export default FiltersContainer;

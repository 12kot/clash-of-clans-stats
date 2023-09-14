import React from "react";
import styles from "./FiltersContainer.module.scss";
import PlayerFiltersInput from "./filters/inputs/FilterPlayerInput";
import FiltersPlayerList from "./filters/FiltersPlayerList";
import FiltersClanList from "./filters/FiltersClanList";
import AllLabels from "components/labels/allLabels/AllLabels";
import ClanFiltersInput from "./filters/inputs/FilterClanInput";

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

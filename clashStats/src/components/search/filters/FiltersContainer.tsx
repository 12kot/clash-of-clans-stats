import React, { ReactElement } from "react";
import styles from "./FiltersContainer.module.scss";

type Props = {
  Input: ReactElement;
  Filters: () => JSX.Element;
  Labels: () => JSX.Element;
  applyFiltersHandler: () => void
};

const FiltersContainer = ({ Input, Filters, Labels, applyFiltersHandler }: Props) => {
  return (
    <article className={styles.detailsContainer}>
      <section className={styles.inputContainer}>
        <span className={styles.input}>
          <button className={styles.button} onClick={applyFiltersHandler}>
            Apply Filters
          </button>
          {Input}
        </span>
        <Filters />
      </section>
      <span className={styles.labels}>
        <Labels />
      </span>
    </article>
  );
};

export default FiltersContainer;

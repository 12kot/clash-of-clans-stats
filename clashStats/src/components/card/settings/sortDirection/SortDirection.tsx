import React, { ReactElement } from "react";
import styles from "./SortDirection.module.scss";
import ArrowSVG from "assets/svg/arrow/ArrowSVG";
import { useSortDirection } from "hooks/sort/useSortDirection";

const SortDirection = (): ReactElement => {
  const { direction, handleClick } = useSortDirection();

  return (
    <button className={styles.container} onClick={handleClick}>
      <span className={`${styles.item} ${direction === "more" && styles.active}`}>
        <ArrowSVG />
      </span>
      <span className={`${styles.item} ${direction === "less" && styles.active}`}>
        <ArrowSVG />
      </span>
    </button>
  );
};

export default SortDirection;

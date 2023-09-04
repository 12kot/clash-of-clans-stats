import React from "react";
import styles from "./FiltersInput.module.scss";
import ClanInput from "components/searchMenu/inputs/inputs/ClanInput";

const ClanFiltersInput = () => {
  return (
    <span className={styles.input}>
      <ClanInput onResults={false} />
    </span>
  );
};

export default ClanFiltersInput;

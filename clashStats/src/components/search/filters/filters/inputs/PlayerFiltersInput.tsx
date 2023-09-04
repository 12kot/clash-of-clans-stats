import React from "react";
import styles from "./FiltersInput.module.scss";
import PlayerInput from "components/searchMenu/inputs/inputs/PlayerInput";

const PlayerFiltersInput = () => {
  return (
    <span className={styles.input}>
      <PlayerInput onResults={false} />
    </span>
  );
};

export default PlayerFiltersInput;

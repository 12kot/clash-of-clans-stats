import React from "react";
import styles from "./ClanDetailsInput.module.scss";
import ClanInput from "components/searchMenu/inputs/inputs/ClanInput";

const ClanDetailsInput = () => {
  return (
    <span className={styles.input}>
      <ClanInput onResults={false} />
    </span>
  );
};

export default ClanDetailsInput;

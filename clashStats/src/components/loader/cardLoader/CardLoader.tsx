import React from "react";
import styles from "./CardLoader.module.scss";
import Loader from "../spinLoader/Loader";

const CardLoader = () => {
  return (
    <div className={styles.container}>
      <Loader size="24px" weight="3px" />
    </div>
  );
};

export default CardLoader;

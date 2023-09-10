import React from "react";
import styles from "./BlockCardLoader.module.scss";
import Loader from "../../spinLoader/Loader";

const BlockCardLoader = () => {
  return (
    <div className={styles.container}>
      <Loader size="24px" weight="3px" />
    </div>
  );
};

export default BlockCardLoader;

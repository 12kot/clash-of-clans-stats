import React, { ReactElement } from "react";
import styles from "./LineCardLoader.module.scss";
import Loader from "../../spinLoader/Loader";

const LineCardLoader = (): ReactElement => {
  return (
    <div className={styles.container}>
      <Loader size="24px" weight="3px" />
    </div>
  );
};

export default LineCardLoader;

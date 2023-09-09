import React, { ReactElement } from "react";
import styles from "./Loader.module.scss";

type Props = {
  size?: string;
  weight?: string;
};

const Loader = ({ size, weight }: Props): ReactElement => {
  return (
    <div className={styles.container}>
      <div
        className={styles.loader}
        style={{
          width: size,
          height: size,
          borderWidth: weight,
        }}
      ></div>
    </div>
  );
};

export default Loader;

import React, { ReactElement } from "react";
import styles from "./AllLabels.module.scss";

type Props = {
  labels: ReactElement[]
}

const AllLabels = ({labels}: Props) => {
  return (
    <section className={styles.container}>{labels}</section>
  );
};

export default AllLabels;

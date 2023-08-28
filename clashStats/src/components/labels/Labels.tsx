import React, { ReactElement } from "react";
import styles from "./Labels.module.scss";
import { v4 } from "uuid";
import { TLabel } from "types/types/label/labelTypes";

const getLabels = (labels: TLabel[]): ReactElement[] => {
  return labels.map((label) => (
    <img src={label.img} title={label.title} alt="" className={styles.icon} key={v4()} />
  ));
};

type Props = {
  labels: TLabel[];
};

const Labels = ({ labels }: Props): ReactElement => {
  return <span className={`${styles.labels}`}>{getLabels(labels)}</span>;
};

export default Labels;

import React, { ReactElement } from "react";
import styles from "./Labels.module.scss";
import { LabelType } from "types/cardTypes";
import { v4 } from "uuid";

const getLabels = (labels: LabelType[]): ReactElement[] => {
  return labels.map((label) => (
    <img src={label.img} title={label.title} alt="" className={styles.icon} key={v4()} />
  ));
};

type Props = {
  labels: LabelType[];
};

const Labels = ({ labels }: Props): ReactElement => {
  return <span className={`${styles.labels}`}>{getLabels(labels)}</span>;
};

export default Labels;

import React, { ReactElement } from "react";
import styles from "./Labels.module.scss";
import { v4 } from "uuid";
import { TLabel } from "types/types/label/labelTypes";
import LabelItem from "./labelItem/LabelItem";

const getLabels = (labels: TLabel[]): ReactElement[] => {
  return labels.map((label) => (
    <LabelItem label={label} key={v4()} />
  ));
};

type Props = {
  labels: TLabel[];
};

const Labels = ({ labels }: Props): ReactElement => {
  return <span className={`${styles.labels}`}>{getLabels(labels)}</span>;
};

export default Labels;

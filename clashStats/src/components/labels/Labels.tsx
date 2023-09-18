import React, { ReactElement } from "react";
import styles from "./Labels.module.scss";
import { TLabel } from "types/types/label/labelTypes";
import LabelItem from "./labelItem/LabelItem";
import { v4 } from "uuid";

export const getLabels = (labels: TLabel[]): ReactElement[] => {
  return labels.map((label) => <LabelItem label={label} key={v4()} />);
};

type Props = {
  labels: TLabel[];
};

const Labels = ({ labels }: Props): ReactElement => {
  return <span className={`${styles.labels}`}>{getLabels(labels)}</span>;
};

export default Labels;

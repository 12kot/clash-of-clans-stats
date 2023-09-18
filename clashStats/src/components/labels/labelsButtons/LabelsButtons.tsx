import React, { ReactElement } from "react";
import styles from "./LabelsButtons.module.scss";
import { TLabelsItem } from "types/types/slices/labelsTypes";
import LabelItemButton from "../labelItem/labelButton/LabelItemButton";
import LabelItem from "../labelItem/LabelItem";
import { LabelInit } from "types/initial/label/LabelInitial";
import { v4 } from "uuid";

export const getLabels = (
  labels: TLabelsItem,
  active: number[],
  onClick: (n: number) => void
): ReactElement[] => {
  if (labels.loading)
    return [...Array(20)].map(() => <LabelItem label={LabelInit} key={v4()} />);

  return labels.items.map((label) => (
    <LabelItemButton
      label={label}
      onClick={onClick}
      isActive={active.includes(label.id)}
      key={label.id}
    />
  ));
};

type Props = {
  labels: TLabelsItem;
  active: number[];
  onClick: (n: number) => void;
};

const LabelsButtons = ({ labels, active, onClick }: Props): ReactElement => {
  return (
    <section className={styles.container}>
      {getLabels(labels, active, onClick)}
    </section>
  );
};

export default LabelsButtons;

import React from "react";
import styles from "./LabelItem.module.scss";
import { TLabel } from "types/types/label/labelTypes";

type Props = {
  label: TLabel;
};

const LabelItem = ({ label }: Props) => {
  return (
    <img
      src={label.img}
      title={label.title}
      alt={label.title}
      className={`${styles.label}`}
    />
  );
};

export default LabelItem;

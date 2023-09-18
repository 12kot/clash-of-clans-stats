import React from "react";
import styles from "./LabelItemButton.module.scss";
import { TLabel } from "types/types/label/labelTypes";

type Props = {
  label: TLabel;
  onClick: (n: number) => void;
  isActive: boolean;
};

const LabelItemButton = ({ label, onClick, isActive }: Props) => {
  return (
    <button
      key={label.id}
      className={styles.button}
      onClick={() => onClick(label.id)}
    >
      <img
        src={label.img}
        title={label.title}
        alt={label.title}
        className={`${styles.icon} ${isActive && styles.active}`}
      />
    </button>
  );
};

export default LabelItemButton;

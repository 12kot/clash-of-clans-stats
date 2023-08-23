import React, { ReactElement } from "react";
import styles from "./CardHeader.module.scss";
import { CardHeaderType, LabelType } from "types/cardTypes";

const getLables = (labels: LabelType[]): ReactElement[] => {
  return labels.map((label) => (
    <img
      src={label.img}
      alt={label.title}
      title={label.title}
      className={styles.icon}
    ></img>
  ));
};

const CardHeader = ({ object, labels }: CardHeaderType): ReactElement => {
  return (
    <header className={styles.nameContainer}>
      <img src={object.img} alt=""></img>
      <div className={styles.name}>
        <span className={styles.clanName}>{object.name}</span>
        <span className={styles.tag}>{object.tag}</span>
      </div>
      {getLables(labels)}
    </header>
  );
};

export default CardHeader;

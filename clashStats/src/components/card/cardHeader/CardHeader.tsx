import React, { ReactElement } from "react";
import styles from "./CardHeader.module.scss";
import { CardHeaderType, LabelType } from "types/cardTypes";

const getLables = (labels: LabelType[]): ReactElement[] => {
  return labels.map((label) => (
    <img
      src={label.img}
      alt={label.title}
      className={styles.icon}
    ></img>
  ));
};

const CardHeader = ({ player, labels }: CardHeaderType): ReactElement => {
  return (
    <header className={styles.nameContainer}>
      <img src={player.img} alt=""></img>
      <div className={styles.name}>
        <span className={styles.clanName}>{player.name}</span>
        <span className={styles.tag}>{player.tag}</span>
      </div>
      {getLables(labels)}
    </header>
  );
};

export default CardHeader;

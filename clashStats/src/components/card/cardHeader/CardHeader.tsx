import React, { ReactElement } from "react";
import styles from "./CardHeader.module.scss";

const getLables = (labels: Label[]): ReactElement[] => {
  return labels.map((label) => (
    <img
      src={label.img}
      alt={label.title}
      className={styles.icon}
    ></img>
  ));
};

type Player = {
  player: {
    img: string;
    name: string;
    tag: string;
  };
};

type Label = {
  img: string;
  title: string;
};

interface Props extends Player {
  labels: Label[];
}

const CardHeader = ({ player, labels }: Props): ReactElement => {
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

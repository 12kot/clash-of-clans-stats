import React, { ReactElement } from "react";
import styles from "./CardHeader.module.scss";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { TCardHeader, TLabel } from "types/types/card/cardTypes";

const getLables = (labels: TLabel[]): ReactElement[] => {
  return labels.map((label) => (
    <img
      src={label.img}
      alt={label.title}
      title={label.title}
      className={styles.icon}
      key={v4()}
    ></img>
  ));
};

const CardHeader = ({ object, labels }: TCardHeader): ReactElement => {
  return (
    <header className={styles.nameContainer}>
      <img src={object.img} alt="" title={object.title}></img>
      <NavLink to={`/${object.type.toLowerCase()}/${object.tag}`} className={styles.name}>
        <span className={styles.clanName}>{object.name}</span>
        <span className={styles.tag}>{object.tag}</span>
      </NavLink>
      {getLables(labels)}
    </header>
  );
};

export default CardHeader;

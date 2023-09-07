import React, { ReactElement } from "react";
import styles from "./CardHeader.module.scss";
import { NavLink } from "react-router-dom";
import { TCardHeader } from "types/types/card/cardTypes";
import Labels from "components/labels/Labels";

const CardHeader = ({ object, labels }: TCardHeader): ReactElement => {
  return (
    <header className={styles.nameContainer}>
      <img src={object.img} alt="" title={object.title}></img>
      <NavLink to={`/${object.type.toLowerCase()}/${object.tag}`} className={styles.name}>
        <span className={styles.clanName}>{object.name}</span>
        <span className={styles.tag}>{object.tag}</span>
      </NavLink>
      <Labels labels={labels} />
    </header>
  );
};

export default CardHeader;

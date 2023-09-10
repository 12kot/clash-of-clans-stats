import React, { ReactElement } from "react";
import styles from "./LineCardHeader.module.scss";
import { NavLink } from "react-router-dom";
import { TCardBasicPlayerMainInfo } from "types/types/card/basic/player/cardBasicPlayerTypes";

const LineCardBasicPlayerdeader = ({ townHall, name, tag }: TCardBasicPlayerMainInfo): ReactElement => {
  return (
    <header className={styles.item}>
      <img src={townHall.img} alt={townHall.title} title={townHall.title}></img>
      <NavLink to={`/clan/${tag}`} className={styles.cardInfo}>
        <span className={styles.name}>{name}</span>
        <span className={styles.tag}>{tag}</span>
      </NavLink>
    </header>
  );
};

export default LineCardBasicPlayerdeader;

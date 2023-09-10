import React, { ReactElement } from "react";
import styles from "./BlockCardHeader.module.scss";
import { NavLink } from "react-router-dom";
import { TCardItem } from "types/types/card/basic/cardBasicTypes";

type Props = {
  banner: TCardItem;
  name: string;
  tag:string
}

const CardBasicHeader = ({ banner, name, tag }: Props): ReactElement => {
  return (
    <header className={styles.item}>
      <img src={banner.img} alt={banner.title} title={banner.title}></img>
      <NavLink to={`/clan/${tag}`} className={styles.cardInfo}>
        <span className={styles.name}>{name}</span>
        <span className={styles.tag}>{tag}</span>
      </NavLink>
    </header>
  );
};

export default CardBasicHeader;

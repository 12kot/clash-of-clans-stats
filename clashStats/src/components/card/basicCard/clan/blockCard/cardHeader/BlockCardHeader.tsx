import React, { ReactElement } from "react";
import styles from "./BlockCardHeader.module.scss";
import { NavLink } from "react-router-dom";
import Labels from "components/labels/Labels";
import { TBasicCardClanMainInfo } from "types/types/card/basic/clan/basicClanCardTypes";

const BasicClanCardHeader = ({ clanBanner, capital, name, tag }: TBasicCardClanMainInfo): ReactElement => {
  return (
    <header className={styles.item}>
      <img src={clanBanner.img} alt={clanBanner.title} title={clanBanner.title}></img>
      <NavLink to={`/clan/${tag}`} className={styles.cardInfo}>
        <span className={styles.name}>{name}</span>
        <span className={styles.tag}>{tag}</span>
      </NavLink>
      <Labels labels={[{...capital, id: 0}]} />
    </header>
  );
};

export default BasicClanCardHeader;

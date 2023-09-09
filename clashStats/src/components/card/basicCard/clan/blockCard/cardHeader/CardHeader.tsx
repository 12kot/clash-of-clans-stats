import React, { ReactElement } from "react";
import styles from "./CardHeader.module.scss";
import { NavLink } from "react-router-dom";
import Labels from "components/labels/Labels";
import { TBasicCardClanMainInfo } from "types/types/card/basic/clan/basicClanCardTypes";

const BasicClanCardHeader = ({ clanBanner, capital, name, tag }: TBasicCardClanMainInfo): ReactElement => {
  return (
    <header className={styles.nameContainer}>
      <img src={clanBanner.img} alt="" title={clanBanner.title}></img>
      <NavLink to={`/clan/${tag}`} className={styles.name}>
        <span className={styles.clanName}>{name}</span>
        <span className={styles.tag}>{tag}</span>
      </NavLink>
      <Labels labels={[{...capital, id: 0}]} />
    </header>
  );
};

export default BasicClanCardHeader;

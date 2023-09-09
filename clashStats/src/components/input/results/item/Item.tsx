import React, { ReactElement } from "react";
import styles from "../Results.module.scss";
import { NavLink } from "react-router-dom";
import { TBasicCardClanMainInfo } from "types/types/card/basic/clan/basicClanCardTypes";
import { TBasicCardPlayerMainInfo } from "types/types/card/basic/player/basicPlayerCardTypes";

type Props = {
  item: TBasicCardClanMainInfo | TBasicCardPlayerMainInfo;
  type: string;
};

const getImg = (item: TBasicCardClanMainInfo | TBasicCardPlayerMainInfo) => {
  if (item.clanBanner)
    return (
      <img
        src={item.clanBanner.img}
        alt={item.clanBanner.title}
        title={item.clanBanner.title}
      ></img>
    );

  if (item.townHall)
    return (
      <img
        src={item.townHall.img}
        alt={item.townHall.title}
        title={item.townHall.title}
      ></img>
    );
};

const Item = ({ item, type }: Props): ReactElement => {
  return (
    <NavLink to={`/${type}/${item.tag}`} className={styles.resultItem}>
      {getImg(item)}
      <div className={styles.name}>
        {item.name}
        <span className={styles.tag}>{item.tag}</span>
      </div>
    </NavLink>
  );
};

export default Item;

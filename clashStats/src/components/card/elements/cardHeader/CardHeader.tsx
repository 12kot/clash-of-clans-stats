import React, { ReactElement } from "react";
import blockStyles from "./styles/BlockCardHeader.module.scss";
import lineStyles from "./styles/LineCardHeader.module.scss";
import { NavLink } from "react-router-dom";
import { TCardItem } from "types/types/card/basic/cardBasicTypes";
import { TSearchButton } from "types/types";

type Props = {
  banner: TCardItem;
  name: string;
  tag: string;
  link: TSearchButton
  viewType: "line" | "block"
}

const CardHeader = ({ banner, name, tag, link, viewType }: Props): ReactElement => {
  const styles = viewType === "line"  ? lineStyles : blockStyles

  return (
    <header className={styles.item}>
      <img src={banner.img} alt={banner.title} title={banner.title}></img>
      <NavLink to={`/${link}/${tag}`} className={styles.cardInfo}>
        <span className={styles.name}>{name}</span>
        <span className={styles.tag}>{tag}</span>
      </NavLink>
    </header>
  );
};

export default CardHeader;

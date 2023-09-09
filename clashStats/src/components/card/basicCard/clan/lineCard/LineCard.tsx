import React, { ReactElement } from "react";
import styles from "./LineCard.module.scss";
import Loader from "components/loader/Loader";
import { TCardClan, TCardPlayer } from "types/types/card/cardTypes";
import { NavLink } from "react-router-dom";
import Labels from "components/labels/Labels";
import CardItems from "../../../cardElementItem/CardElementItem";

type Props = {
  card: TCardClan | TCardPlayer;
  loading: boolean;
};

const LineCard = ({ card, loading }: Props): ReactElement => {
  return (
    <div className={styles.container}>
      <span className={styles.item}>
        <img
          src={card.headerCard.object.img}
          alt={card.headerCard.object.title}
        ></img>
        <NavLink
          to={`/${card.headerCard.object.type.toLowerCase()}/${
            card.headerCard.object.tag
          }`}
          className={styles.cardInfo}
        >
          <p className={styles.name}>{card.headerCard.object.name}</p>
          <p className={styles.tag}>{card.headerCard.object.tag}</p>
        </NavLink>
        <Labels labels={card.headerCard.labels} />
      </span>
      <span className={styles.item}>
        <CardItems items={card.otherInfo} />
      </span>
      <span className={styles.item}>
        <CardItems items={card.trophies} />
      </span>
      <span className={`${styles.item} ${styles.last}`}>
        <Labels labels={card.labels} />
      </span>
    </div>
  );
};

export default LineCard;

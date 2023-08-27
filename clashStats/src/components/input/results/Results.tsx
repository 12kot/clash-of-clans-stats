import React, { ReactElement } from "react";
import styles from "./Results.module.scss";
import { NavLink } from "react-router-dom";
import { v4 } from "uuid";
import { CardType } from "types/cardTypes";

const Results = ({ results, type }: { results: CardType[], type: string }): ReactElement => {
  const getResults = (): ReactElement[] => {
    return results.map((item) => (
      <NavLink to={`/${type}/${item.headerCard.object.tag}`} className={styles.resultItem} key={v4()}>
        <img src={item.headerCard.object.img} alt=""></img>
        <div className={styles.name}>
          {item.headerCard.object.name}
          <span className={styles.tag}>{item.headerCard.object.tag}</span>
        </div>
      </NavLink>
    ));
  };

  return <>{getResults()}</>;
};

export default Results;

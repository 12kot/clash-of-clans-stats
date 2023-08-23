import React, { ReactElement } from "react";
import styles from "./Results.module.scss";
import { SearchType } from "types/search";
import { NavLink } from "react-router-dom";

const Results = ({ results, type }: { results: SearchType[], type: string }): ReactElement => {
  const getResults = (): ReactElement[] => {
    return results.map((item) => (
      <NavLink to={`/${type}/${item.tag}`} className={styles.resultItem}>
        <img src={item.img} alt=""></img>
        <div className={styles.name}>
          {item.name}
          <span className={styles.tag}>{item.tag}</span>
        </div>
      </NavLink>
    ));
  };

  return <>{getResults()}</>;
};

export default Results;

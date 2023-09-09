import React, { ReactElement } from "react";
import styles from "./Results.module.scss";
import { NavLink } from "react-router-dom";
import Item from "./item/Item";
import { v4 } from "uuid";
import { TSearchButton } from "types/types";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";

type Props = {
  results: TCardBasicPlayer[] ;
  value: string;
  type: TSearchButton;
};

const getResults = (results: TCardBasicPlayer[], type: string): ReactElement[] => {
  return results.map((item) => (
    <Item item={item.mainInfo} type={type} key={v4()} />
  ));
};

const Results = ({ results, type, value }: Props): ReactElement => {
  return (
    <>
      {getResults(results, type)}
      {results.length !== 0 && (
        <NavLink
          to={`/search/${type}/${value}`}
          className={`${styles.resultItem} ${styles.fixed}`}
        >
          <p>All results →</p>
        </NavLink>
      )}
    </>
  );
};

export default Results;

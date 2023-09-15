import React, { ReactElement } from "react";
import styles from "./Search.module.scss";
import banner from "assets/img/searchBack2.png";

// import { useParams } from "react-router-dom";
import SearchHeader from "components/search/header/SearchHeader";
import { TSearchButton } from "types/types";

type Props = {
  SearchElement: ReactElement;
  type: TSearchButton
};

const Search = ({ SearchElement, type }: Props): ReactElement => {
  // const params = useParams<{ type: string; tag: string }>();

  return (
    <main className={styles.container}>
      <div className={styles.menu}>
        <SearchHeader active={type} />
      </div>
      <img src={banner} alt="" className={styles.banner}></img>
      {SearchElement}
    </main>
  );
};

export default Search;

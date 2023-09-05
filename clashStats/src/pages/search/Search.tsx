import React, { ReactElement } from "react";
import styles from "./Search.module.scss";
import banner from "assets/img/searchBack2.png";

import { useParams } from "react-router-dom";
import SearchHeader from "components/search/header/SearchHeader";
import SearchClans from "./searchTypes/SearchClans";
import SearchPlayers from "./searchTypes/SearchPlayers";

const Search = (): ReactElement => {
  const params = useParams<{ type: string; tag: string }>();

  return (
    <>
      <div className={styles.menu}>
        <SearchHeader active={params.type} />
      </div>
      <img src={banner} alt="" className={styles.banner}></img>

      {params.type?.toLowerCase() === "clan" ? (
        <SearchClans />
      ) : (
        <SearchPlayers />
      )}
    </>
  );
};

export default Search;

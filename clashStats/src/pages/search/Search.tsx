import React, { ReactElement } from "react";
import styles from "./Search.module.scss";
import banner from "assets/img/searchBack2.png";

import Card from "components/card/Card";
import { useAppSelector } from "hooks/store";
import { selectSearchClans } from "store/selectors/searchSelectors";
import { useParams, useSearchParams } from "react-router-dom";
import SearchHeader from "components/search/header/SearchHeader";
import ClanFilters from "components/search/filters/clanFilters/ClanFilters";
import { TSearchCard } from "types/types/slices/searchTypes";
import { v4 } from "uuid";

const getClans = (clans: TSearchCard) => {
  return clans.list.map((clan) => (
    <Card {...clan} loading={clans.loading} key={v4()} />
  ));
};

const Search = (): ReactElement => {
  const clans = useAppSelector(selectSearchClans);
  const params = useParams<{ type: string; tag: string }>();
  const [searchParams] = useSearchParams();

  return (
    <>
      <div className={styles.menu}>
        <SearchHeader active={params.type} />
      </div>
      <img src={banner} alt="" className={styles.banner}></img>
      <main className={styles.container}>
        {params.type?.toLowerCase() === "clan" ? (
          <ClanFilters />
        ) : (
          <p>{searchParams.get("tag")} </p>
        )}
        <article className={styles.cards}>{getClans(clans)}</article>
      </main>
    </>
  );
};

export default Search;

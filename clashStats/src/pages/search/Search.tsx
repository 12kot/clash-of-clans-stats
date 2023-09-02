import React, { ReactElement } from "react";
import styles from "./Search.module.scss";

import Card from "components/card/Card";
import { useAppSelector } from "hooks/store";
import { selectSearchClans } from "store/selectors/searchSelectors";
import { useParams, useSearchParams } from "react-router-dom";
import SearchHeader from "components/search/header/SearchHeader";
import ClanFilters from "components/search/clanFilters/ClanFilters";

const Search = (): ReactElement => {
  const clans = useAppSelector(selectSearchClans);
  const params = useParams<{ type: string; tag: string }>();
  const [searchParams] = useSearchParams();

  return (
    <main className={styles.container}>
      <SearchHeader active={params.type} />
      
      {params.type?.toLowerCase() === "clan" ? (
        <ClanFilters />
      ) : (
        <p>{searchParams.get("tag")} </p>
      )}
      <article className={styles.cards}>
        {clans.list.map((clan) => (
          <Card {...clan} loading={clans.loading} />
        ))}
      </article>
    </main>
  );
};

export default Search;

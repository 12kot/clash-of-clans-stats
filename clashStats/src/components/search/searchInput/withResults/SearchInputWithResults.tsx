import React, { ReactElement } from "react";
import styles from "../SearchInputs.module.scss";
import Input from "components/input/Input";
import { TSearchInputWithResults } from "types/types/search/searchTypes";
import SearchButton from "components/ui/buttons/searchButton/SearchButton";
import SearchMiniCards from "components/search/searchResults/SearchMiniCards";

const SearchInputWithResults = ({ input, button, results }: TSearchInputWithResults): ReactElement => {
  return (
    <section className={styles.input}>
      <Input {...input} />
      <SearchButton {...button} />
      <div className={styles.results}>
        {results.active && <SearchMiniCards {...results} />}
      </div>
    </section>
  );
};

export default SearchInputWithResults;

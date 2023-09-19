import React, { ReactElement } from "react";
import styles from "./SearchInput.module.scss";
import stylesInput from "css/Input.module.scss";
import Input from "components/input/Input";
import { TSearchInputWithResults } from "types/types/search/searchTypes";
import SearchButton from "components/ui/buttons/searchButton/SearchButton";
import SearchMiniCards from "../results/SearchMiniCards";

const SearchInputWithResults = ({ input, button, results }: TSearchInputWithResults): ReactElement => {
  return (
    <section className={`${stylesInput.input} ${styles.container}`}>
      <Input {...input} />
      <SearchButton {...button} />
      <div className={styles.results}>
        {results.active && <SearchMiniCards {...results} />}
      </div>
    </section>
  );
};

export default SearchInputWithResults;

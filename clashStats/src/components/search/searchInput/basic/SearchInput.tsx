import React, { ReactElement } from "react";
import styles from "../SearchInputs.module.scss";
import Input from "components/input/Input";
import { TSearchInput } from "types/types/search/searchTypes";
import SearchButton from "components/ui/buttons/searchButton/SearchButton";

const SearchInput = ({ input, button }: TSearchInput): ReactElement => {
  return (
    <section className={styles.input}>
      <Input {...input} />
      <SearchButton {...button} />
    </section>
  );
};

export default SearchInput;

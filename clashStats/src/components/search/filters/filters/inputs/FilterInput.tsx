import React from "react";
import styles from "./FiltersInput.module.scss";
import SearchInput from "components/search/searchInput/SearchInput";
import { getInputObj } from "components/search/searchInput/SearchInput.service";

type Props = {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  searchHandler: () => void;
  loading: boolean;
  value: string;
  placeholder: string;
};

const FilterInput = ({
  value,
  onChangeHandler,
  searchHandler,
  loading,
  placeholder,
}: Props) => {

  const inpObj = getInputObj({
    value,
    placeholder,
    loading: loading,
    disabled: value.length <= 3,
    onChange: onChangeHandler,
    onClick: searchHandler,
  });

  return (
    <span className={styles.input}>
      <SearchInput {...inpObj} />
    </span>
  );
};

export default FilterInput;

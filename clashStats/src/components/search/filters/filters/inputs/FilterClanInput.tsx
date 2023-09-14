import React from "react";
import styles from "./FiltersInput.module.scss";
import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import { TSearchCardClan } from "types/types/slices/searchTypes";
import { searchClans } from "store/slices/SearchSlice";
import { selectSearchClans } from "store/selectors/searchSelectors";
import { useAppDispatch } from "hooks/store";
import SearchInput from "components/search/searchInput/basic/SearchInput";
import { getInputObj } from "components/search/searchInput/SearchInput.service";

const FilterClanInput = () => {
  const dispatch = useAppDispatch();
  const { value, onChange } = useInput<string>("");
  const { data } = useSearch<TCardBasicClan, TSearchCardClan>(
    value,
    searchClans,
    selectSearchClans
  );

  const onClick = (): void => {
    dispatch(searchClans({ name: value }));
  };

  const inpObj = getInputObj({
    placeholder: "Clan name or tag",
    loading: data.loading,
    disabled: value.length <= 3,
    onChange,
    onClick,
    value,
  });

  return (
    <span className={styles.input}>
      <SearchInput {...inpObj} />
    </span>
  );
};

export default FilterClanInput;

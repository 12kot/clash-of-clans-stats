import React from "react";
import styles from "./FiltersInput.module.scss";
import { useAppDispatch } from "hooks/store";
import { searchPlayers } from "store/slices/SearchSlice";
import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { TSearchCardPlayer } from "types/types/slices/searchTypes";
import { selectSearchPlayers } from "store/selectors/searchSelectors";
import { getInputObj } from "components/search/searchInput/SearchInput.service";
import SearchInput from "components/search/searchInput/basic/SearchInput";

const FilterPlayerInput = () => {
  const dispatch = useAppDispatch();
  const { value, onChange } = useInput<string>("");
  const { data } = useSearch<TCardBasicPlayer, TSearchCardPlayer>(
    value,
    searchPlayers,
    selectSearchPlayers
  );

  const onClick = (): void => {
    dispatch(searchPlayers({ name: value }));
  };

  const inpObj = getInputObj({
    placeholder: "Player tag",
    loading: data.loading,
    disabled: value.length <= 3,
    onChange,
    value,
    onClick,
  });

  return (
    <span className={styles.input}>
      <SearchInput {...inpObj} />
    </span>
  );
};

export default FilterPlayerInput;

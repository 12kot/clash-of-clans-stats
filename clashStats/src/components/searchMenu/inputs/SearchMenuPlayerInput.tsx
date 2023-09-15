import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { selectSearchPlayers } from "store/selectors/searchSelectors";
import { searchPlayers } from "store/slices/SearchSlice";
import { TSearchCardPlayer } from "types/types/slices/searchTypes";
import { getInputPlayerWhitResultsObj } from "components/search/searchInput/SearchInput.service";
import SearchInputWithResults from "components/search/searchInput/withResults/SearchInputWithResults";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { TFilterPlayer } from "types/types/slices/filterTypes";
import { selectFilterPlayer } from "store/selectors/filterSelectors";

const SearchMenuPlayerInput = (): ReactElement => {
  const navigate = useNavigate();
  const { value, onChange } = useInput<string>("");
  const { data } = useSearch<TCardBasicPlayer, TSearchCardPlayer, TFilterPlayer>(
    value,
    searchPlayers,
    selectSearchPlayers,
    selectFilterPlayer
  );

  const onClick = (): void => {
    navigate(`/search/player?name=${value}`);
  };

  const inpObj = getInputPlayerWhitResultsObj({
    placeholder: "Player tag",
    loading: data.loading,
    disabled: value.length <= 3,
    onChange,
    onClick,
    value,
    active: value.length > 3,
    link: "player",
    items: data.list,
  });

  return <SearchInputWithResults {...inpObj} />;
};

export default SearchMenuPlayerInput;

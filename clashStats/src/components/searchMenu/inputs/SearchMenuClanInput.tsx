import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { selectSearchClans } from "store/selectors/searchSelectors";
import { searchClans } from "store/slices/SearchSlice";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import { TSearchCardClan } from "types/types/slices/searchTypes";
import { getInputClanWhitResultsObj } from "components/search/searchInput/SearchInput.service";
import SearchInputWithResults from "components/search/searchInput/withResults/SearchInputWithResults";

const SearchMenuClanInput = (): ReactElement => {
  const navigate = useNavigate();
  const { value, onChange } = useInput<string>("");
  const { data } = useSearch<TCardBasicClan, TSearchCardClan>(
    value,
    searchClans,
    selectSearchClans
  );

  const onClick = (): void => {
    navigate(`/search/clan?tag=${value}`);
  };

  const inpObj = getInputClanWhitResultsObj({
    placeholder: "Clan name or tag",
    loading: data.loading,
    disabled: value.length <= 3,
    onChange,
    onClick,
    value,
    active: value.length> 3,
    link: "clan",
    items: data.list,
  });

  return <SearchInputWithResults {...inpObj} />;
};

export default SearchMenuClanInput;

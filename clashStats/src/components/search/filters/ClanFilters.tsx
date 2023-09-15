import React, { ReactElement } from "react";
import FiltersContainer from "./FiltersContainer";
import FiltersClanList from "./filters/FiltersClanList";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { searchClans } from "store/slices/SearchSlice";
import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import { TSearchCardClan } from "types/types/slices/searchTypes";
import { selectSearchClans } from "store/selectors/searchSelectors";
import FilterInput from "./filters/inputs/FilterInput";
import { selectFilterClan } from "store/selectors/filterSelectors";
import { TFilterClan } from "types/types/slices/filterTypes";
import AllLabelsClan from "components/labels/allLabels/AllLabelsClan";

type Props = {
  initValue: string;
}

const ClanFilters = ({initValue}: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilterClan);

  const { value, onChange } = useInput<string>(initValue);
  const { data } = useSearch<TCardBasicClan, TSearchCardClan, TFilterClan>(
    value,
    searchClans,
    selectSearchClans,
    selectFilterClan
  );

  const searchHandler = () => {
    dispatch(searchClans({ name: value, filters }));
  };

  return (
    <FiltersContainer
      Input={
        <FilterInput
          value={value}
          onChangeHandler={onChange}
          searchHandler={searchHandler}
          loading={data.loading}
          placeholder="Clan name or tag"
        />
      }
      Filters={FiltersClanList}
      Labels={AllLabelsClan}
      applyFiltersHandler={searchHandler}
    />
  );
};

export default ClanFilters;

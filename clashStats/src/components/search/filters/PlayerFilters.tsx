import React, { ReactElement } from "react";
import FiltersContainer from "./FiltersContainer";
import FiltersPlayerList from "./filters/FiltersPlayerList";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { searchPlayers } from "store/slices/SearchSlice";
import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { TSearchCardPlayer } from "types/types/slices/searchTypes";
import { selectSearchPlayers } from "store/selectors/searchSelectors";
import FilterInput from "./filters/inputs/FilterInput";
import { selectFilterPlayer } from "store/selectors/filterSelectors";
import { TFilterPlayer } from "types/types/slices/filterTypes";
import LabelsButtonsPlayer from "components/labels/labelsButtons/labelsType/LabelsButtonsPlayer";

type Props = {
  initValue: string;
};

const PlayerFilters = ({ initValue }: Props): ReactElement => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilterPlayer);

  const { value, onChange } = useInput<string>(initValue);
  const { data } = useSearch<
    TCardBasicPlayer,
    TSearchCardPlayer,
    TFilterPlayer
  >(value, searchPlayers, selectSearchPlayers, selectFilterPlayer);

  const searchHandler = () => {
    dispatch(searchPlayers({ name: value, filters }));
  };

  return (
    <FiltersContainer
      Input={
        <FilterInput
          value={value}
          onChangeHandler={onChange}
          searchHandler={searchHandler}
          loading={data.loading}
          placeholder="Player tag"
        />
      }
      Filters={FiltersPlayerList}
      Labels={LabelsButtonsPlayer}
      applyFiltersHandler={searchHandler}
    />
  );
};

export default PlayerFilters;

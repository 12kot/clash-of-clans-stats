import Input from "components/input/Input";
import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectSearchPlayers } from "store/selectors/searchSelectors";
import { searchPlayers } from "store/slices/SearchSlice";

type Props = { onResults: boolean };

const PlayerInput = ({ onResults }: Props): ReactElement => {
  const players = useAppSelector(selectSearchPlayers);
  const { value, onChange } = useInput("");
  const { OnClick } = useSearch(value, searchPlayers);

  return (
    <Input
      placeholder="Player tag"
      value={value}
      onChange={onChange}
      type="PLAYER"
      onClickButton={OnClick}
      disabledButton={value.length <= 3 || players.loading}
      loading={players.loading}
      result={onResults ? players.list : undefined}
    />
  );
};

export default PlayerInput;

import Input from "components/input/Input";
import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { selectSearchPlayers } from "store/selectors/searchSelectors";
import { searchPlayers } from "store/slices/SearchSlice";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { TSearchCardPlayer } from "types/types/slices/searchTypes";

type Props = { onResults: boolean };

const PlayerInput = ({ onResults }: Props): ReactElement => {
  const navigate = useNavigate();
  const { value, onChange } = useInput("");
  const { data } = useSearch<TCardBasicPlayer, TSearchCardPlayer>(value, searchPlayers, selectSearchPlayers);

  const OnClick = (): void => {
    navigate(`/search/player?tag=${value}`);
  };

  return (
    <Input
      placeholder="Player tag"
      value={value}
      onChange={onChange}
      type="PLAYER"
      onClickButton={OnClick}
      disabledButton={value.length <= 3 || data.loading}
      loading={data.loading}
      result={onResults ? data.list : undefined}
    />
  );
};

export default PlayerInput;

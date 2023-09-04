import Input from "components/input/Input";
import { useAppDispatch, useAppSelector } from "hooks/store";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectSearchPlayers } from "store/selectors/searchSelectors";
import { searchPlayers } from "store/slices/SearchSlice";

type Props = {
  onResults: boolean;
}

const PlayerInput = ({onResults}: Props) => {
  const players = useAppSelector(selectSearchPlayers);
  const dispatch = useAppDispatch();

  const [searchPlayer, setSearchPlayer] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchPlayer.length > 3)
      setTimeout(() => {
        dispatch(searchPlayers({ name: searchPlayer }));
      }, 300);
  }, [dispatch, searchPlayer, onResults]);

  const handleSearchPlayer = (): void => {
    navigate(`/search/player?tag=${searchPlayer}`);
  };

  return (
    <Input
      type="PLAYER"
      placeholder="Player tag"
      value={searchPlayer}
      onChange={setSearchPlayer}
      onClick={handleSearchPlayer}
      disabled={searchPlayer.length <= 3 || players.loading}
      loading={players.loading}
      results={onResults ? players.list : undefined}
    />
  );
};

export default PlayerInput;

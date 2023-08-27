import Input from "components/input/Input";
import { useAppDispatch, useAppSelector } from "hooks/store";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchPlayers } from "store/slices/SearchSlice";

const PlayerInput = () => {
  const players = useAppSelector((state) => state.search.players);
  const dispatch = useAppDispatch();

  const [searchPlayer, setSearchPlayer] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchPlayer.length > 3)
      setTimeout(() => {
        dispatch(searchPlayers({ name: searchPlayer }));
      }, 300);
  }, [dispatch, searchPlayer]);

  const handleSearchPlayer = (): void => {
    navigate(`/player/${searchPlayer}`);
  };

  return (
    <Input
      type="player"
      placeholder="Player tag"
      value={searchPlayer}
      onChange={setSearchPlayer}
      onClick={handleSearchPlayer}
      disabled={searchPlayer.length <= 3 || players.loading}
      results={players.list}
    />
  );
};

export default PlayerInput;

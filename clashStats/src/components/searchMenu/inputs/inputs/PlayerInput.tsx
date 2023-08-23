import Input from "components/input/Input";
import { useAppSelector } from "hooks/store";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PlayerInput = () => {
  const players = useAppSelector((state) => state.search.players);

  const [searchPlayer, setSearchPlayer] = useState<string>("");
  const navigate = useNavigate();

  const handleSearchPlayer = (): void => {
    navigate(`/player/${searchPlayer}`);
  };

  return (
    <Input
      type="player"
      placeholder="PLAYER"
      value={searchPlayer}
      onChange={setSearchPlayer}
      onClick={handleSearchPlayer}
      disabled={searchPlayer.length <= 3 || players.loading}
      results={players.list}
    />
  );
};

export default PlayerInput;

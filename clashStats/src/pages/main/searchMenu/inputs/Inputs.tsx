import Input from "components/input/Input";
import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Inputs.module.scss";

type Props = {
  activeButton: "PLAYER" | "CLAN";
};

const Inputs = ({ activeButton }: Props): ReactElement => {
  const [searchPlayer, setSearchPlayer] = useState<string>("");
  const [searchClan, setSearchClan] = useState<string>("");

  const navigate = useNavigate();

  const handleSearchPlayer = (): void => {
    navigate(`/player/${searchPlayer}`);
  };

  const handleSearchClan = (): void => {
    navigate(`/clan/${searchClan}`);
  };

  const getInput = (type: string): ReactElement => {
    if (type === "PLAYER")
      return (
        <Input
          placeholder="PLAYER"
          value={searchPlayer}
          onChange={setSearchPlayer}
          onClick={handleSearchPlayer}
          disabled={!searchPlayer}
        />
      );

    return (
      <Input
        placeholder="CLAN"
        value={searchClan}
        onChange={setSearchClan}
        onClick={handleSearchClan}
        disabled={!searchClan}
      />
    );
  };

  return <section className={styles.input}>{getInput(activeButton)}</section>;
};

export default Inputs;

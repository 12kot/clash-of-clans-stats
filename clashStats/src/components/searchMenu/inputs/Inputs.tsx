import React, { ReactElement } from "react";
import styles from "./Inputs.module.scss";
import PlayerInput from "./inputs/PlayerInput";
import ClanInput from "./inputs/ClanInput";

type Props = {
  activeButton: "PLAYER" | "CLAN";
};

const Inputs = ({ activeButton }: Props): ReactElement => {
  const getInput = (type: string): ReactElement => {
    if (type === "PLAYER") return <PlayerInput />;

    return <ClanInput />;
  };

  return <section className={styles.input}>{getInput(activeButton)}</section>;
};

export default Inputs;

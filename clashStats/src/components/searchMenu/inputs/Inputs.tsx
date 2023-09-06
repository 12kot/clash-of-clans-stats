import React, { ReactElement } from "react";
import styles from "./Inputs.module.scss";
import PlayerInput from "./inputs/PlayerInput";
import ClanInput from "./inputs/ClanInput";
import { TSearchButton } from "types/types";

type Props = {
  activeButton: TSearchButton;
};

const getInput = (type: string): ReactElement => {
  if (type === "PLAYER") return <PlayerInput onResults={true} />;

  return <ClanInput onResults={true} />;
};

const Inputs = ({ activeButton }: Props): ReactElement => {

  return <section className={styles.input}>{getInput(activeButton)}</section>;
};

export default Inputs;

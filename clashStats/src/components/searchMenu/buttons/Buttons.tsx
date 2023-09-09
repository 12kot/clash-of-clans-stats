import React, { ReactElement } from "react";
import styles from "./Buttons.module.scss";
import { TSearchButton } from "types/types";

type Props = {
  activeButton: TSearchButton;
  setActiveButton: React.Dispatch<React.SetStateAction<TSearchButton>>;
};

const Buttons = ({ activeButton, setActiveButton }: Props): ReactElement => {
  return (
    <section className={styles.items}>
      <button
        className={`${styles.item} ${
          activeButton === "player" && styles.active
        }`}
        onClick={() => setActiveButton("player")}
      >
        Player
      </button>
      <button
        className={`${styles.item} ${activeButton === "clan" && styles.active}`}
        onClick={() => setActiveButton("clan")}
      >
        Clan
      </button>
    </section>
  );
};

export default Buttons;

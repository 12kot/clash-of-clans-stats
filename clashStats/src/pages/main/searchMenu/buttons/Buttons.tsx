import React, { ReactElement } from "react";
import styles from "./Buttons.module.scss";

type Props = {
  activeButton: "PLAYER" | "CLAN";
  setActiveButton: React.Dispatch<React.SetStateAction<"PLAYER" | "CLAN">>;
};

const Buttons = ({ activeButton, setActiveButton }: Props): ReactElement => {
  return (
    <section className={styles.items}>
      <button
        className={`${styles.item} ${
          activeButton === "PLAYER" && styles.active
        }`}
        onClick={() => setActiveButton("PLAYER")}
      >
        Player
      </button>
      <button
        className={`${styles.item} ${activeButton === "CLAN" && styles.active}`}
        onClick={() => setActiveButton("CLAN")}
      >
        Clan
      </button>
    </section>
  );
};

export default Buttons;

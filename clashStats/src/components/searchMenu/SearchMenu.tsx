import React, { ReactElement, useState } from "react";
import styles from "./SearchMenu.module.scss";
import { TSearchButton } from "types/types";
import SearchButtons from "./searchButtons/SearchButtons";
import SearchMenuClanInput from "./inputs/SearchMenuClanInput";
import SearchMenuPlayerInput from "./inputs/SearchMenuPlayerInput";

const SearchMenu = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<TSearchButton>("player");

  return (
    <article className={styles.container}>
      <SearchButtons
        activeButton={activeButton}
        setActiveButton={setActiveButton}
      />

      <span className={styles.input}>
        {activeButton === "player" ? (
          <SearchMenuPlayerInput />
        ) : (
          <SearchMenuClanInput />
        )}
      </span>
    </article>
  );
};

export default SearchMenu;

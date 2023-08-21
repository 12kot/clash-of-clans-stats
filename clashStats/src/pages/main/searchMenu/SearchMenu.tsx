import React, { ReactElement, useState } from "react";
import styles from "./SearchMenu.module.scss";
import Buttons from "./buttons/Buttons";
import Inputs from "./inputs/Inputs";

const SearchMenu = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<"PLAYER" | "CLAN">("PLAYER");

  return (
    <article className={styles.search}>
      <Buttons activeButton={activeButton} setActiveButton={setActiveButton} />
      <Inputs activeButton={activeButton} />
    </article>
  );
};

export default SearchMenu;

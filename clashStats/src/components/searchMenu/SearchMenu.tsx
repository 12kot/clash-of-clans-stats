import React, { ReactElement, useState } from "react";
import styles from "./SearchMenu.module.scss";
import Buttons from "./buttons/Buttons";
import Inputs from "./inputs/Inputs";
import { TSearchButton } from "types/types";

const SearchMenu = (): ReactElement => {
  const [activeButton, setActiveButton] = useState<TSearchButton>("PLAYER");

  return (
    <article className={styles.search}>
      <Buttons activeButton={activeButton} setActiveButton={setActiveButton} />
      <Inputs activeButton={activeButton} />
    </article>
  );
};

export default SearchMenu;

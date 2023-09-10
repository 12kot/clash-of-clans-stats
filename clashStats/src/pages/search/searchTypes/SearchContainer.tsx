import React, { ReactElement } from "react";
import styles from "./SearchTypes.module.scss"

type Props = {
    Filters: () => ReactElement;
    cards: ReactElement[] | ReactElement
};

const SearchContainer = ({Filters, cards}: Props) => {
  return (
    <main className={styles.container}>
      <Filters />
      <article className={styles.cards}>{cards}</article>
    </main>
  );
};

export default SearchContainer;

import React, { ReactElement } from "react";
import styles from "./SearchTypes.module.scss";
import CardSettings from "components/card/settings/CardSetting";
import { TSortTypes } from "types/types/card/basic/sort/sortBasicTypes";

interface Props extends TSortTypes {
  Filters: () => ReactElement;
  cards: ReactElement[] | ReactElement;
};

const SearchContainer = ({ Filters, cards, type }: Props) => {
  return (
    <main className={styles.container}>
      <Filters />
      <CardSettings type={type} />

      <article className={`${styles.cards} ${styles.cardsLine}`}>
        {cards}
      </article>
    </main>
  );
};

export default SearchContainer;

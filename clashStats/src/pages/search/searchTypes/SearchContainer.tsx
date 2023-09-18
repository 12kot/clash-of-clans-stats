import React, { ReactElement } from "react";
import styles from "./SearchTypes.module.scss";
import CardSettings from "components/card/settings/CardSetting";
import { TSortTypes } from "types/types/card/basic/sort/sortBasicTypes";
import { useAppSelector } from "hooks/store";
import { selectViewType } from "store/selectors/viewTypeSelectors";

interface Props extends TSortTypes {
  Filters: ReactElement;
  cards: ReactElement[] | ReactElement;
}

const SearchContainer = ({ Filters, cards, type }: Props) => {
  const viewType = useAppSelector(selectViewType); 

  return (
    <main className={styles.container}>
      {Filters}
      <CardSettings type={type} />

      <article className={`${styles.cards} ${viewType === "block" && styles.cardsBlock}`}>
        {cards}
      </article>
    </main>
  );
};

export default SearchContainer;

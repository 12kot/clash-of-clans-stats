import React, { ReactElement } from "react";
import styles from "./SearchTypes.module.scss";
import { useViewType } from "hooks/viewType/useViewType";
import GridViewSVG from "assets/svg/viewType/GridView";
import ListViewSVG from "assets/svg/viewType/ListView";

type Props = {
  Filters: () => ReactElement;
  cards: ReactElement[] | ReactElement;
};

const SearchContainer = ({ Filters, cards }: Props) => {
  const { handleClick, viewType } = useViewType();

  return (
    <main className={styles.container}>
      <Filters />

      <section className={styles.displaySettings}>
        <p>Sort by name</p>
        <button onClick={handleClick} className={styles.viewType}>
          {viewType === "block" ? <GridViewSVG /> : <ListViewSVG />}
        </button>
      </section>

      <article className={`${styles.cards} ${styles.cardsLine}`}>
        {cards}
      </article>
    </main>
  );
};

export default SearchContainer;

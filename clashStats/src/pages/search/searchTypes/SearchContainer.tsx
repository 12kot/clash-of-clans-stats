import React, { ReactElement, useRef, useState } from "react";
import styles from "./SearchTypes.module.scss";
import { useViewType } from "hooks/viewType/useViewType";
import GridViewSVG from "assets/svg/viewType/GridView";
import ListViewSVG from "assets/svg/viewType/ListView";
import { useOnClickOutside } from "hooks/outsideClick/useOutsideClick";

type Props = {
  Filters: () => ReactElement;
  cards: ReactElement[] | ReactElement;
};

const SearchContainer = ({ Filters, cards }: Props) => {
  const { handleClick, viewType } = useViewType();
  const [active, setActive] = useState(false);
  const [current, setCurrent] = useState("name");
  
    const onClickFalse = () => {
      setActive(false);
    };

  const listref = useRef(null);
  useOnClickOutside(listref, onClickFalse);

  const onClick = () => {
    setActive((e) => !e);
  };

  const onClickList = (value: string) => {
    onClick();
    setCurrent(value);
  };


  return (
    <main className={styles.container}>
      <Filters />

      <section className={styles.displaySettings}>
        <p>
          <b>
            Sort by{" "}
            <button className={`${styles.sort}`} ref={listref}>
              <b onClick={onClick}>{current}</b>
              <ul className={`${styles.dropMenu} ${active && styles.active}`}>
                <li onClick={() => onClickList("NAME1")}>NAME1</li>
                <li onClick={() => onClickList("NAME2")}>NAME2</li>
                <li onClick={() => onClickList("NAME3")}>NAME3</li>
                <li onClick={() => onClickList("NAME4")}>NAME4</li>
                <li onClick={() => onClickList("NAME5")}>NAME5</li>
              </ul>
            </button>
          </b>
        </p>
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

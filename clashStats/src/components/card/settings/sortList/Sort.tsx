import React, { ReactElement, useRef, useState } from "react";
import styles from "./Sort.module.scss";
import { useOnClickOutside } from "hooks/outsideClick/useOutsideClick";
import { v4 } from "uuid";
import { TSortItem } from "types/types/card/basic/sort/sortBasicTypes";

type Props = {
  current: TSortItem;
  list: TSortItem[];
  handleClick: (item: TSortItem) => void;
};

const getItemList = (
  itemList: TSortItem[],
  handleItemClick: (item: TSortItem) => void
) => {
  return itemList.map((item) => (
    <li
      onClick={() => handleItemClick(item)}
      className={styles.dropItem}
      key={v4()}
    >
      <b>{item.value}</b>
    </li>
  ));
};

const Sort = ({ list, handleClick, current }: Props): ReactElement => {
  const [activeChoose, setActiveChoose] = useState(false);

  const onClick = () => {
    setActiveChoose((e) => !e);
  };

  const handleItemClick = (item: TSortItem) => {
    onClick();
    handleClick(item);
  };

  const listref = useRef(null);
  useOnClickOutside(listref, onClick, activeChoose);

  return (
    <div className={styles.container}>
      <p>
        <b>Sort by </b>
      </p>
      <span className={styles.settings} ref={listref}>
        <button className={`${styles.btn}`}>
          <b onClick={onClick}>{current.value}</b>
        </button>
        <ul className={`${styles.dropMenu} ${activeChoose && styles.active}`}>
          {getItemList(list, handleItemClick)}
        </ul>
      </span>
    </div>
  );
};

export default Sort;
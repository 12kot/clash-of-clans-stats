import React, { ReactElement, useRef, useState } from "react";
import styles from "./Sort.module.scss";
import { useOnClickOutside } from "hooks/outsideClick/useOutsideClick";
import { v4 } from "uuid";
import { TSortItem } from "types/types/card/basic/sort/sortBasicTypes";
import SortDirection from "../sortDirection/SortDirection";

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
    <li className={styles.dropItem} key={v4()}>
      <button onClick={() => handleItemClick(item)}>
        <b>{item.value}</b>
      </button>
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
        <button className={`${styles.btn}`} onClick={onClick}>
          <b>{current.value}</b>
        </button>
        <ul className={`${styles.dropMenu} ${activeChoose && styles.active}`}>
          {getItemList(list, handleItemClick)}
        </ul>
      </span>
      <SortDirection />
    </div>
  );
};

export default Sort;

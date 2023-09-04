import React from "react";
import styles from "./AllLabels.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { addLabel } from "store/slices/FilterSlice";
import { selectFilterLabels } from "store/selectors/filterSelectors";

const getLabels = (active: number[], onClick: (n: number) => void) => {
  return [...Array(26)].map((label, index) => (
    <button
      key={index}
      className={styles.button}
      onClick={() => onClick(index)}
    >
      <img
        src={
          "https://api-assets.clashofclans.com/labels/128/hM7SHnN0x7syFa-s6fE7LzeO5yWG2sfFpZUHuzgMwQg.png"
        }
        title={index+""}
        alt=""
        className={`${styles.icon} ${active.includes(index) && styles.active}`}
      />
    </button>
  ));
};

const AllLabels = () => {
  const active = useAppSelector(selectFilterLabels);
  const dispatch = useAppDispatch();

  const onClick = (index: number) => {
    dispatch(addLabel(index));
  };

  return (
    <section className={styles.container}>{getLabels(active, onClick)}</section>
  );
};

export default AllLabels;

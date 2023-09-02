import React, { useState } from "react";
import styles from "./AllLabels.module.scss";

const onClick = (
  active: number[],
  setActive: React.Dispatch<React.SetStateAction<number[]>>,
  index: number
) => {
  if (active.includes(index)) setActive(active.filter((i) => i !== index));
  else if (active.length === 3) setActive([...active.slice(1), index]);
  else setActive([...active, index]);
};

const getLabels = (
  active: number[],
  setActive: React.Dispatch<React.SetStateAction<number[]>>
) => {
  return [...Array(26)].map((label, index) => (
    <button
      key={index}
      className={styles.button}
      onClick={() => onClick(active, setActive, index)}
    >
      <img
        src={
          "https://api-assets.clashofclans.com/labels/128/hM7SHnN0x7syFa-s6fE7LzeO5yWG2sfFpZUHuzgMwQg.png"
        }
        title={"label.title"}
        alt=""
        className={`${styles.icon} ${active.includes(index) && styles.active}`}
      />
    </button>
  ));
};

const AllLabels = () => {
  const [active, setActive] = useState<number[]>([]);

  return (
    <section className={styles.container}>
      {getLabels(active, setActive)}
    </section>
  );
};

export default AllLabels;

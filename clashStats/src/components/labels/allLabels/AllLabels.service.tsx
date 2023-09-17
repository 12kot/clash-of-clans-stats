import styles from "./AllLabels.module.scss";

export const getAllLabels = (
  active: number[],
  onClick: (n: number) => void
) => {
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
        title={index + ""}
        alt={""}
        className={`${styles.icon} ${active.includes(index) && styles.active}`}
      />
    </button>
  ));
};

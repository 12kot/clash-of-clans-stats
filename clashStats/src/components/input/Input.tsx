import React, { ReactElement } from "react";
import styles from "./Input.module.scss";
import SearchSVG from "assets/svg/SearchSVG";

type Props = {
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
  disabled: boolean;
};

const Input = ({
  placeholder,
  value,
  onChange,
  onClick,
  disabled,
}: Props): ReactElement => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className={styles.icon} onClick={onClick} disabled={disabled}>
        <SearchSVG />
      </button>
      
      <div className={styles.results}>
        <div className={styles.resultItem}>ф</div>
        <div className={styles.resultItem}></div>
        <div className={styles.resultItem}></div>
      </div>
    </div>
  );
};

export default Input;

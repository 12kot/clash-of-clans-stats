import React, { ReactElement } from "react";
import styles from "./Input.module.scss";
import SearchSVG from "assets/svg/SearchSVG";
import Results from "./results/Results";
import Loader from "components/loader/Loader";
import { TSearchButton } from "types/types";
import { TCard } from "types/types/card/cardTypes";

type Props = {
  type: TSearchButton;
  placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
  results?: TCard[];
};

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  onClick,
  disabled,
  results,
  loading
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
        {loading ? <Loader /> : <SearchSVG />}
      </button>

      <div className={styles.results}>
       {!disabled && <Results results={results || []} type={type} value={value} />}
      </div>
    </div>
  );
};

export default Input;

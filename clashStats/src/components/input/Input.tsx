import React, { ReactElement } from "react";
import styles from "./Input.module.scss";
import SearchSVG from "assets/svg/SearchSVG";
import Results from "./results/Results";
import Loader from "components/loader/Loader";
import { TSearchButton } from "types/types";
import { TCardClan, TCardPlayer } from "types/types/card/cardTypes";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: TSearchButton;
  loading: boolean;

  disabledButton: boolean;
  onClickButton: () => void;

  result?: TCardPlayer[] | TCardClan[];
}

const Input = ({
  type,
  loading,
  disabledButton,
  onClickButton,
  result,
  ...restProps
}: Props): ReactElement => {
  const value = { ...restProps };

  return (
    <div className={styles.container}>
      <input className={styles.input} {...restProps} />
      <button
        className={styles.icon}
        onClick={onClickButton}
        disabled={disabledButton}
      >
        {loading ? <Loader /> : <SearchSVG />}
      </button>

      <div className={styles.results}>
        {!disabledButton && (
          <Results results={result || []} type={type} value={value + ""} />
        )}
      </div>
    </div>
  );
};

export default Input;

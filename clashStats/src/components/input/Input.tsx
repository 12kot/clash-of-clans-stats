import React, { ReactElement } from "react";
import styles from "./Input.module.scss";
import SearchSVG from "assets/svg/SearchSVG";
import { TSearchButton } from "types/types";
import SpinLoader from "components/loader/spinLoader/Loader";
import InputSearchResultsPlayers from "./results/ResultsPlayers";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: TSearchButton;
  loading: boolean;

  disabledButton: boolean;
  onClickButton: () => void;

  result: boolean;
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
        {loading ? <SpinLoader /> : <SearchSVG />}
      </button>

      <div className={styles.results}>
        {!disabledButton && result && (
          <InputSearchResultsPlayers value={value + ""} />
        )}
      </div>
    </div>
  );
};

export default Input;

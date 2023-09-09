import React, { ReactElement } from "react";
import styles from "./Input.module.scss";
import SearchSVG from "assets/svg/SearchSVG";
import Results from "./results/ResultsPlayers";
import { TSearchButton } from "types/types";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import SpinLoader from "components/loader/spinLoader/Loader";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: TSearchButton;
  loading: boolean;

  disabledButton: boolean;
  onClickButton: () => void;

  result?: TCardBasicPlayer[] | TCardBasicClan[];
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
        {!disabledButton && (
          <Results results={result || []} type={type} value={value + ""} />
        )}
      </div>
    </div>
  );
};

export default Input;

import React, { ReactElement } from "react";
import styles from "./Input.module.scss";
import SearchSVG from "assets/svg/SearchSVG";
import Results from "./results/Results";
import Loader from "components/loader/Loader";
import { TSearchButton } from "types/types";
import { TBasicCardPlayer } from "types/types/card/basic/player/basicPlayerCardTypes";
import { TBasicCardClan } from "types/types/card/basic/clan/basicClanCardTypes";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type: TSearchButton;
  loading: boolean;

  disabledButton: boolean;
  onClickButton: () => void;

  result?: TBasicCardPlayer[] | TBasicCardClan[];
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

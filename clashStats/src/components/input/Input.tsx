import React, { ReactElement } from "react";
import styles from "./Input.module.scss";
import SearchSVG from "assets/svg/SearchSVG";
import { TSearchButton } from "types/types";
import SpinLoader from "components/loader/spinLoader/Loader";
import InputSearchResultsPlayers from "./results/ResultsPlayers";
import InputSearchResultsClans from "./results/ResultsClan";

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

const getInput = (type: TSearchButton, value: string) => {
  if (type === "player") return <InputSearchResultsPlayers value={value} />;

  return <InputSearchResultsClans value={value} />;
};

const Input = ({
  type,
  loading,
  disabledButton,
  onClickButton,
  result,
  ...restProps
}: Props): ReactElement => {
  const { value } = { ...restProps };

  return (
    <div className={styles.container}>
      <input className={styles.input} {...restProps} value={value}/>
      <button
        className={styles.icon}
        onClick={onClickButton}
        disabled={disabledButton}
      >
        {loading ? <SpinLoader /> : <SearchSVG />}
      </button>

      <div className={styles.results}>
        {!disabledButton && result && getInput(type, value + "")}
      </div>
    </div>
  );
};

export default Input;

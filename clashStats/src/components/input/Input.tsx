import React, { ReactElement } from "react";
import styles from "./Input.module.scss";
import { TInput } from "types/types/search/searchTypes";

interface Props extends TInput {}

const Input = ({ onKeyDown, ...restProps }: Props): ReactElement => {
  const { value } = { ...restProps };

  const onKeyDownhandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === "Enter") {
      onKeyDown();
    }
  };

  return (
    <input
      className={styles.input}
      {...restProps}
      value={value}
      onKeyDown={(e) => onKeyDownhandler(e)}
    />
  );
};

export default Input;

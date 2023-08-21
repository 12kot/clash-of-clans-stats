import React, { ReactElement } from "react";
import styles from "./Input.module.scss";

const Input = ({placeholder}: {placeholder: string}): ReactElement => {
  return <input className={styles.input} placeholder={placeholder}></input>;
};

export default Input;

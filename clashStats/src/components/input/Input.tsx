import React, { ReactElement } from "react";
import styles from "./Input.module.scss";

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const Input = ({ ...restProps }: Props): ReactElement => {
  const { value } = { ...restProps };

  return <input className={styles.input} {...restProps} value={value} />;
};

export default Input;

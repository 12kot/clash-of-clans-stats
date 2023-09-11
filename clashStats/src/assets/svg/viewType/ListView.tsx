import React from "react";
import styles from "./View.module.scss";

const ListView = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.svg}
    >
      <path
        d="M20 7L4 7"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M15 12L4 12"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M9 17H4"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ListView;

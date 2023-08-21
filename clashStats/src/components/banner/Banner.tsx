import React, { ReactElement } from "react";
import styles from "./Banner.module.scss";
import banner from "assets/cocBanner.jpeg";

const Banner = ({ text }: { text?: string }): ReactElement => {
  return (
    <div className={styles.banner}>
      <div className={styles.action}>
        <h1 className={styles.text}>{text}</h1>
        <button className={styles.button}>НАЧАТЬ</button>
      </div>
      <img src={banner} alt="" />
    </div>
  );
};

export default Banner;

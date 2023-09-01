import React from "react";
import styles from "./DetailsClanList.module.scss";
import im from "assets/svg/3.png";

const DetailsClanList = () => {
  return (
    <ul className={styles.details}>
      <li className={styles.detailsItem}>
        <span className={styles.radioInput}>
          <img src={im} alt=""></img>
          <input type="range" max="100"></input>
          <img src={im} alt=""></img>
        </span>
        <label className={styles.label}>Required Townhall Level</label>
      </li>
      <li className={styles.detailsItem}>
        <span className={styles.radioInput}>
          <img src={im} alt=""></img>
          <input type="range" max="100"></input>
          <img src={im} alt=""></img>
        </span>
        <label className={styles.label}>Required Trophies</label>
      </li>
      <li className={styles.detailsItem}>
        <span className={styles.radioInput}>
          <img src={im} alt=""></img>
          <input type="range" max="100"></input>
          <img src={im} alt=""></img>
        </span>
        <label className={styles.label}>Required Versus Trophies</label>
      </li>
      <li className={styles.detailsItem}>
        <span className={styles.radioInput}>
          <img src={im} alt=""></img>
          <input type="range" max="100"></input>
          <img src={im} alt=""></img>
        </span>
        <label className={styles.label}>Clan Level</label>
      </li>
      <li className={styles.detailsItem}>
        <span className={styles.radioInput}>
          <img src={im} alt=""></img>
          <input type="range" max="100"></input>
          <img src={im} alt=""></img>
        </span>
        <label className={styles.label}>Clan Trophies</label>
      </li>
    </ul>
  );
};

export default DetailsClanList;

import React from "react";
import styles from "./DetailsClanList.module.scss";
import im1 from "assets/svg/1.png";
import TT from "assets/svg/trophy.png";
import versus from "assets/svg/versus.png";
import exp from "assets/svg/exp.png";
import vv from "assets/svg/1v.png";
import vv10 from "assets/svg/10v.png";
import RangeInput from "components/ui/rangeInput/RangeInput";

const DetailsClanList = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h2>Required</h2>
        <ul className={styles.details}>
          <li className={styles.detailsItem}>
            <img src={im1} alt=""></img>
            <span className={styles.input}>
              <RangeInput />
            </span>
          </li>
          <li className={styles.detailsItem}>
            <img src={TT} alt=""></img>
            <span className={styles.input}>
              <RangeInput />
            </span>
          </li>
          <li className={styles.detailsItem}>
            <img src={versus} alt=""></img>

            <span className={styles.input}>
              <RangeInput />
            </span>
          </li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Details</h2>
        <ul className={styles.details}>
          <li className={styles.detailsItem}>
            <img src={TT} alt=""></img>
            <span className={styles.input}>
              <RangeInput />
            </span>
          </li>
          <li className={styles.detailsItem}>
            <img src={versus} alt=""></img>
            <span className={styles.input}>
              <RangeInput />
            </span>
          </li>
          <li className={styles.detailsItem}>
            <img src={exp} alt=""></img>
            <span className={styles.input}>
              <RangeInput />
            </span>
          </li>
          <li className={styles.detailsItem}>
            <img src={vv} alt=""></img>
            <span className={styles.input}>
              <RangeInput />
            </span>
            <img src={vv10} alt=""></img>
          </li>
          <li className={styles.detailsItem}>
            <img src={exp} alt=""></img>
            <span className={styles.input}>
              <RangeInput />
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default DetailsClanList;

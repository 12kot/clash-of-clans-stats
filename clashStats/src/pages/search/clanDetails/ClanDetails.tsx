import React from "react";
import styles from "./ClanDetails.module.scss";
import ClanDetailsInput from "./input/ClanDetailsInput";
import DetailsClanList from "./detailsClanList/DetailsClanList";
import DetailsLabels from "./detailsLabels/DetailsLabels";


const ClanDetails = () => {
  return (
    <article className={styles.detailsContainer}>
      <section className={styles.inputContainer}>
        <ClanDetailsInput />
        <DetailsClanList />
      </section>
      <span className={styles.labels}>
        <DetailsLabels />
      </span>
    </article>
  );
};

export default ClanDetails;

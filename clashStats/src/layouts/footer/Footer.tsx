import React, { ReactElement } from "react";
import styles from "./Footer.module.scss";

const Footer = (): ReactElement => {
  return (
    <footer className={styles.container}>
      <p className={styles.spoiler}>
        This material is unofficial and is not endorsed by Supercell. For more
        information see Supercell's Fan Content Policy:
        www.supercell.com/fan-content-policy.{" "}
      </p>
    </footer>
  );
};

export default Footer;

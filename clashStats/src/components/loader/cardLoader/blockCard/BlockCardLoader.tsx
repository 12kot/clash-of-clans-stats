import React from "react";
import styles from "./BlockCardLoader.module.scss";
import Loader from "../../spinLoader/Loader";
import CardTitle from "components/card/card/elements/header/CardTitle";

type Props = {
  header?: string;
};

const BlockCardLoader = ({ header }: Props) => {
  return (
    <section className={styles.container}>
      {!!header && <CardTitle header={header} />}
      <div className={styles.content}>
        <Loader size="24px" weight="3px" />
      </div>
    </section>
  );
};

export default BlockCardLoader;

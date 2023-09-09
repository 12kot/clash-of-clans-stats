import React, { ReactElement } from "react";
import styles from "./AbsoluteImage.module.scss";
import { TCardItem } from "types/types/card/basic/basicCardTypes";

const AbsoluteImage = ({ img, title }: TCardItem): ReactElement => {
  return (
    <img
      className={styles.item}
      src={img}
      alt={title}
      title={title}
    />
  );
};

export default AbsoluteImage;

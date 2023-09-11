import React, { ReactElement } from "react";
import styles from "./AbsoluteImage.module.scss";
import { TCardItem } from "types/types/card/basic/cardBasicTypes";

const AbsoluteImage = ({ img, title }: TCardItem): ReactElement => {
  if(!img) return <></>

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

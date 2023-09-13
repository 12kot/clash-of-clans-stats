import React from "react";
import styles from "./CardSettings.module.scss";
import BasicSort from "./sortList/basicSort/BasicClanSort";
import { useViewType } from "hooks/viewType/useViewType";
import GridViewSVG from "assets/svg/viewType/GridView";
import ListViewSVG from "assets/svg/viewType/ListView";
import { TSortTypes } from "types/types/card/basic/sort/sortBasicTypes";

interface Props extends TSortTypes {}

const getSort = ({type}: Props) => {
  if (type === "basicClan") return <BasicSort />;
};

const CardSettings = ({ type }: Props) => {
  const { handleClick, viewType } = useViewType();

  return (
    <section className={styles.container}>
      {getSort({type})}
      <button onClick={handleClick} className={styles.viewType}>
        {viewType === "block" ? <GridViewSVG /> : <ListViewSVG />}
      </button>
    </section>
  );
};

export default CardSettings;

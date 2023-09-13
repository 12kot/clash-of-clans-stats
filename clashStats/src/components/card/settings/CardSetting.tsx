import React from "react";
import styles from "./CardSettings.module.scss";
import { useViewType } from "hooks/viewType/useViewType";
import GridViewSVG from "assets/svg/viewType/GridView";
import ListViewSVG from "assets/svg/viewType/ListView";
import { TSortTypes } from "types/types/card/basic/sort/sortBasicTypes";
import SortBasicPlayer from "./sortList/basicSort/SortBasicPlayer";
import SortBasicClan from "./sortList/basicSort/SortBasicClan";

interface Props extends TSortTypes {}

const getSort = ({type}: Props) => {
  if (type === "basicClan") return <SortBasicClan />;
  if (type === "basicPlayer") return <SortBasicPlayer />;
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

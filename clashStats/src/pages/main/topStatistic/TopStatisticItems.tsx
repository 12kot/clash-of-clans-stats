import React, { ReactElement, useEffect } from "react";
import styles from "./TopStatisticItems.module.scss";
import PopularClan from "components/card/cards/PopularClan";
import PopularPlayer from "components/card/cards/PopularPlayer";
import TopPlayer from "components/card/cards/TopPlayer";
import { useAppDispatch } from "hooks/store";
import { getPopularClan, getPopularPlayer, getTopPlayer } from "store/slices/AppSlice";

const TopStatisticItems = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopPlayer());
    dispatch(getPopularPlayer());
    dispatch(getPopularClan());
  }, [dispatch]);

  return (
    <article className={styles.topStats}>
      <PopularClan />
      <PopularPlayer />
      <TopPlayer />
    </article>
  );
};

export default TopStatisticItems;

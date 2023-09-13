import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectAppPopularPlayer } from "store/selectors/appSelectors";
import CardBasicPlayer from "../card/basicCard/player/card/Card";

const PopularPlayer = (): ReactElement => {
  const card = useAppSelector(selectAppPopularPlayer);

  return <CardBasicPlayer card={card.item} loading={card.loading} header={"Most popular player"} />;
};

export default PopularPlayer;

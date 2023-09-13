import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectAppTopPlayer } from "store/selectors/appSelectors";
import CardBasicPlayer from "../card/basicCard/player/card/Card";

const TopPlayer = (): ReactElement => {
  const card = useAppSelector(selectAppTopPlayer);

  return <CardBasicPlayer card={card.item} loading={card.loading} header={"The best player of Belarus"} />
};

export default TopPlayer;

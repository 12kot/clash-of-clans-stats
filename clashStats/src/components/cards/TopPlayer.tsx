import CardBasicPlayer from "components/card/basicCard/player/blockCard/Card";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectAppTopPlayer } from "store/selectors/appSelectors";

const TopPlayer = (): ReactElement => {
  const card = useAppSelector(selectAppTopPlayer);

  return <CardBasicPlayer card={card.item} loading={card.loading} header={"Лучший игрок Беларуси"} />
};

export default TopPlayer;

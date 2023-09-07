import Card from "components/card/basicCard/Card";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectAppTopPlayer } from "store/selectors/appSelectors";

const TopPlayer = (): ReactElement => {
  const card = useAppSelector(selectAppTopPlayer);

  return <Card card={card.item} loading={card.loading} header={"Лучший игрок Беларуси"} />
};

export default TopPlayer;

import Card from "components/card/Card";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";

const TopPlayer = (): ReactElement => {
  const card = useAppSelector((state) => state.app.cards.topPlayer);

  return <Card {...card.player} loading={card.loading} header={"Лучший игрок Беларуси"} />
};

export default TopPlayer;

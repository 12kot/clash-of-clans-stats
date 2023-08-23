import Card from "components/card/Card";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";

const PopularPlayer = (): ReactElement => {
  const card = useAppSelector((state) => state.app.cards.popularPlayer);

  return <Card {...card.player} />;
};

export default PopularPlayer;

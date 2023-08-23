import Card from "components/card/Card";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";

const PopularClan = (): ReactElement => {
  const card = useAppSelector((state) => state.app.cards.popularClan);

  return <Card {...card.player} header={"Самый популярный клан"} />;
};

export default PopularClan;

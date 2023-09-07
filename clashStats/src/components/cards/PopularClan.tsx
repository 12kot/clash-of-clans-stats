import Card from "components/card/basicCard/Card";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectAppPopularClan } from "store/selectors/appSelectors";

const PopularClan = (): ReactElement => {
  const card = useAppSelector(selectAppPopularClan);

  return <Card card={card.item} loading={card.loading} header={"Самый популярный клан"} />;
};

export default PopularClan;

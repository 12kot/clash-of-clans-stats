import CardBasicClan from "components/card/basicCard/clan/blockCard/Card";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectAppPopularClan } from "store/selectors/appSelectors";

const PopularClan = (): ReactElement => {
  const card = useAppSelector(selectAppPopularClan);

  return <CardBasicClan card={card.item} header={"Самый популярный клан"} loading={card.loading} />;
};

export default PopularClan;

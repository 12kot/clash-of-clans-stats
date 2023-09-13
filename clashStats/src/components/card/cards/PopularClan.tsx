import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectAppPopularClan } from "store/selectors/appSelectors";
import CardBasicClan from "../card/basicCard/clan/card/Card";

const PopularClan = (): ReactElement => {
  const card = useAppSelector(selectAppPopularClan);

  return <CardBasicClan card={card.item} header={"Most popular clan"} loading={card.loading} />;
};

export default PopularClan;

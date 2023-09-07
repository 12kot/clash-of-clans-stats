import Card from "components/card/basicCard/Card";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectAppPopularPlayer } from "store/selectors/appSelectors";

const PopularPlayer = (): ReactElement => {
  const card = useAppSelector(selectAppPopularPlayer);

  return <Card card={card.item} loading={card.loading} header={"Самый популярный игрок"} />;
};

export default PopularPlayer;

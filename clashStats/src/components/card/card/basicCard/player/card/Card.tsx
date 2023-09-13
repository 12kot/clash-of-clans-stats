import React, { ReactElement } from "react";
import CardBasic from "../../cards/blockCard/CardBasic";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { getPlayerGeneralizedObj } from "../CardBasicPlayer.service";
import { useAppSelector } from "hooks/store";
import { selectViewType } from "store/selectors/viewTypeSelectors";
import LineCardBasic from "../../cards/lineCard/LineCardBasic";

interface Props {
  header?: string;
  loading: boolean;
  card: TCardBasicPlayer;
}

const CardBasicPlayer = ({ card, ...restProps }: Props): ReactElement => {
  const viewType = useAppSelector(selectViewType);

  if(!!restProps.header || viewType === "block") return <CardBasic {...restProps} {...getPlayerGeneralizedObj(card)} type={"player"} />;
  return <LineCardBasic {...restProps} {...getPlayerGeneralizedObj(card)} type={"player"} />;
};

export default CardBasicPlayer;

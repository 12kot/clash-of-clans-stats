import React, { ReactElement } from "react";
import CardBasic from "../../cards/blockCard/CardBasic";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { getPlayerGeneralizedObj } from "../CardBasicPlayer.service";

interface Props {
  header?: string;
  loading: boolean;
  card: TCardBasicPlayer;
}

const CardBasicPlayer = ({ card, ...restProps }: Props): ReactElement => {
  return <CardBasic {...restProps} {...getPlayerGeneralizedObj(card)} type={"player"} />;
};

export default CardBasicPlayer;

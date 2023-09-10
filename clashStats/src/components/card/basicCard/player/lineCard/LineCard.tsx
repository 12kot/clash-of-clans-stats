import React, { ReactElement } from "react";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { getPlayerGeneralizedObj } from "../CardBasicPlayer.service";
import LineCardBasic from "../../cards/lineCard/LineCardBasic";

interface Props {
  loading: boolean;
  card: TCardBasicPlayer;
}

const LineCardBasicPlayer = ({ card, ...restProps }: Props): ReactElement => {
  return <LineCardBasic {...restProps} {...getPlayerGeneralizedObj(card)} type={"player"} />;
};

export default LineCardBasicPlayer;

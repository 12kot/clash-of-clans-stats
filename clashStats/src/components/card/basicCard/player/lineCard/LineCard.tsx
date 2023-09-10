import React, { ReactElement } from "react";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { getPlayerGeneralizedObj } from "../CardBasicPlayer.service";
import LineCardBasic from "../../cards/lineCard/LineCardBasic";
import LineCardLoader from "components/loader/cardLoader/lineCard/LineCardLoader";

interface Props {
  loading: boolean;
  card: TCardBasicPlayer;
}

const LineCardBasicPlayer = ({ card, loading, ...restProps }: Props): ReactElement => {
  if (loading) return <LineCardLoader />;

  return <LineCardBasic {...restProps} {...getPlayerGeneralizedObj(card)} type={"player"} />;
};

export default LineCardBasicPlayer;

import React, { ReactElement } from "react";
import CardBasic from "../../cards/blockCard/CardBasic";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { getPlayerGeneralizedObj } from "../CardBasicPlayer.service";
import BlockCardLoader from "components/loader/cardLoader/blockCard/BlockCardLoader";

interface Props {
  header?: string;
  loading: boolean;
  card: TCardBasicPlayer;
}

const CardBasicPlayer = ({ card, loading, ...restProps }: Props): ReactElement => {
  if (loading) return <BlockCardLoader />;

  return <CardBasic {...restProps} {...getPlayerGeneralizedObj(card)} type={"player"} />;
};

export default CardBasicPlayer;

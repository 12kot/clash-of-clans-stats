import React, { ReactElement } from "react";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import CardBasic from "../../cards/blockCard/CardBasic";
import { getClanGeneralizedObj } from "../CardBasicClan.service";

interface Props {
  header?: string;
  loading: boolean;
  card: TCardBasicClan;
}

const CardBasicClan = ({ card, ...restProps }: Props): ReactElement => {
  return <CardBasic {...restProps} {...getClanGeneralizedObj(card)} type="clan"/>;
};

export default CardBasicClan;

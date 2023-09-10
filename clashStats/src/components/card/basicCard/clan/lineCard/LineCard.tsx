import React, { ReactElement } from "react";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import LineCardBasic from "../../cards/lineCard/LineCardBasic";
import { getClanGeneralizedObj } from "../CardBasicClan.service";

interface Props {
  loading: boolean;
  card: TCardBasicClan;
}

const LineCardBasicClan = ({ card, ...restProps }: Props): ReactElement => {
  return <LineCardBasic {...restProps} {...getClanGeneralizedObj(card)} type="clan" />;
};

export default LineCardBasicClan;

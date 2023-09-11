import React, { ReactElement } from "react";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import CardBasic from "../../cards/blockCard/CardBasic";
import { getClanGeneralizedObj } from "../CardBasicClan.service";
import { useAppSelector } from "hooks/store";
import { selectViewType } from "store/selectors/viewTypeSelectors";
import LineCardBasic from "../../cards/lineCard/LineCardBasic";

interface Props {
  header?: string;
  loading: boolean;
  card: TCardBasicClan;
}

const CardBasicClan = ({ card, ...restProps }: Props): ReactElement => {
  const viewType = useAppSelector(selectViewType);

  if(!!restProps.header || viewType === "block") return <CardBasic {...restProps} {...getClanGeneralizedObj(card)} type="clan" />;
  return <LineCardBasic {...restProps} {...getClanGeneralizedObj(card)} type="clan" />;
};

export default CardBasicClan;

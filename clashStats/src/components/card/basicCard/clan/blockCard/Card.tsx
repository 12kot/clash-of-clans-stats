import React, { ReactElement } from "react";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import CardBasic from "../../cards/blockCard/CardBasic";
import { TCardBasicGeneralized } from "types/types/card/basic/cardBasicTypes";

interface Props {
  header?: string;
  loading: boolean;
  card: TCardBasicClan;
}

const getObj = (card: TCardBasicClan): TCardBasicGeneralized => {
  return {
    head: {
      info: {
        banner: card.mainInfo.clanBanner,
        name: card.mainInfo.name,
        tag: card.mainInfo.tag,
      },

      labels: [{...card.mainInfo.capital, id: card.mainInfo.capital.value}],
    },

    trophies: [card.trophies.main, card.trophies.versus, card.trophies.capital],
    otherInfo: [card.otherInfo.level, card.otherInfo.members],
    labels: card.labels,
    absoluteImg: card.mainInfo.capital
  };
};

const CardBasicClan = ({ card, ...restProps }: Props): ReactElement => {
  return <CardBasic {...restProps} {...getObj(card)} />;
};

export default CardBasicClan;

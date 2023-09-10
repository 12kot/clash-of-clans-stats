import React, { ReactElement } from "react";
import CardBasic from "../../cards/blockCard/CardBasic";
import { TCardBasicGeneralized } from "types/types/card/basic/cardBasicTypes";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";

interface Props {
  header?: string;
  loading: boolean;
  card: TCardBasicPlayer;
}

const getObj = (card: TCardBasicPlayer): TCardBasicGeneralized => {
  return {
    head: {
      info: {
        banner: card.mainInfo.townHall,
        name: card.mainInfo.name,
        tag: card.mainInfo.tag,
      },

      labels: [],
    },

    trophies: [card.trophies.main, card.trophies.versus, card.trophies.mainLegend],
    otherInfo: [card.otherInfo.level, card.otherInfo.stars],
    labels: card.labels,
    absoluteImg: card.mainInfo.clan
  };
};

const CardBasicPlayer = ({ card, ...restProps }: Props): ReactElement => {
  return <CardBasic {...restProps} {...getObj(card)} />;
};

export default CardBasicPlayer;

import { TCardBasicGeneralized } from "types/types/card/basic/cardBasicTypes";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";

export const getPlayerGeneralizedObj = (card: TCardBasicPlayer): TCardBasicGeneralized => {
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
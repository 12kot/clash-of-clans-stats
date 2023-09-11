import { TCardBasicGeneralized } from "types/types/card/basic/cardBasicTypes";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";

export const getClanGeneralizedObj = (card: TCardBasicClan): TCardBasicGeneralized => {
    return {
      head: {
        info: {
          banner: card.mainInfo.clanBanner,
          name: card.mainInfo.name,
          tag: card.mainInfo.tag,
        },
  
        labels: [{ ...card.mainInfo.capital, id: card.mainInfo.capital.value }],
      },
  
      trophies: [card.trophies.main, card.trophies.versus, card.trophies.capital],
      otherInfo: [card.otherInfo.level, card.otherInfo.members],
      labels: card.labels,
      absoluteImg: card.mainInfo.country,
    };
  };
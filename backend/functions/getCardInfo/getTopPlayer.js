import { fetchData } from "../../fetch/fetchData.js";
import { getPlayerInfo } from "../getPlayerInfo.js";

export const getTopPlayer = async () => {
  //const data = await fetchData(`locations/32000028/rankings/players?limit=1`);
  //if (data?.ok === false) return data;

  //const player = await getPlayerInfo(data.items[0].tag);
  const player = await getPlayerInfo("YL8J8LYVP");

  if (player?.ok === false) return player;
  return {
    header: "Самый популярный игрок",
    headerCard: {
      player: {
        img: "http://localhost:8000/public/TH15_03.png",
        name: player.name,
        tag: player.tag,
      },

      labels: [
        { img: player.league.iconUrls.small, title: player.league.name },
      ],
    },

    trophies: [
      { img: "http://localhost:8000/public/versus-trophy.png", value: player.trophies },
      { img: "http://localhost:8000/public/versus-trophy.png", value: player.builderBaseTrophies },
      { img: "http://localhost:8000/public/versus-trophy.png", value: player.legendStatistics?.legendTrophies },
    ],

    otherInfo: [
      { img: "http://localhost:8000/public/versus-trophy.png", value: player.expLevel },
      { img: "http://localhost:8000/public/versus-trophy.png", value: player.warStars },
    ],

    labels: player.labels.map((label) => {
      return { img: label.iconUrls.medium, title: label.name };
    }),
  };
};

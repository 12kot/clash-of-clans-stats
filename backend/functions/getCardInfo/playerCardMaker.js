export const playerCardMaker = async (data, header) => {
  const getTrophies = () => {
    const trophies = [];

    if (!!data.legendStatistics?.legendTrophies)
      trophies.push({
        img: "http://localhost:8000/public/trophy/legend.png",
        value: data.legendStatistics?.legendTrophies,
      });

    return [
      {
        img: data.league.iconUrls.small,
        value: data.trophies,
      },
      {
        img: "http://localhost:8000/public/trophy/versus.png",
        value: data.builderBaseTrophies,
      },
      ...trophies
    ];
  };

  return {
    header: header,
    img: data.clan.badgeUrls.small,
    headerCard: {
      object: {
        img: `http://localhost:8000/public/townhall/home/${data.townHallLevel}.png`,
        title: `Townhall ${data.townHallLevel}`,
        name: data.name,
        tag: data.tag,
        type: "PLAYER"
      },

      labels: [],
    },

    trophies: getTrophies(),

    otherInfo: [
      {
        img: "http://localhost:8000/public/icons/exp.png",
        value: data.expLevel,
      },
      {
        img: "http://localhost:8000/public/icons/star.png",
        value: data.warStars,
      },
    ],

    labels: data.labels.map((label) => {
      return { img: label.iconUrls.medium, title: label.name };
    }),
  };
};

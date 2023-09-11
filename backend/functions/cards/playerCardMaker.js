export const playerCardMaker = (data) => {
  const getTrophies = () => {
    const getT = () => {
      if (!!data.legendStatistics?.legendTrophies)
        return {
          mainLegend: {
            img: "http://localhost:8000/public/trophy/legend.png",
            value: data.legendStatistics?.legendTrophies,
          },
        };
    };

    return {
      main: {
        img: data.league?.iconUrls?.small,
        value: data.trophies,
      },
      versus: {
        img: "http://localhost:8000/public/trophy/versus.png",
        value: data?.builderBaseTrophies,
      },
      ...getT(),
    };
  };

  return {
    mainInfo: {
      clan: {
        img: data?.clan?.badgeUrls?.small,
        value: data?.clan?.clanLevel,
        title: data?.clan?.name
      },
      townHall: {
        value: data.townHallLevel,
        img: `http://localhost:8000/public/townhall/home/${data.townHallLevel}.png`,
        title: `Townhall ${data.townHallLevel}`,
      },
      name: data.name,
      tag: data.tag
    },

    trophies: getTrophies(),
    otherInfo: {
      level: {
        img: "http://localhost:8000/public/icons/exp.png",
        value: data.expLevel,
      },
      stars: {
        img: "http://localhost:8000/public/icons/star.png",
        value: data.warStars,
      },
    },

    labels: data.labels.map((label) => {
      return { img: label?.iconUrls?.medium, title: label?.name };
    }),
  };
};

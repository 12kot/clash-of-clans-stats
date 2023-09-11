export const clanCardMaker = (data) => {
  const getTrophies = () => {
    return {
      main: {
        img: "http://localhost:8000/public/trophy/trophy.png",
        value: data.clanPoints,
      },
      versus: {
        img: "http://localhost:8000/public/trophy/versus.png",
        value: data.clanBuilderBasePoints,
      },
      capital: {
        img: "http://localhost:8000/public/trophy/capital.webp",
        value: data.clanCapitalPoints,
      },
    };
  };

  const getCapitalLabel = () => {
    if (!!data?.clanCapital?.capitalHallLevel)
      return {
        img: `http://localhost:8000/public/townhall/capital/${data?.clanCapital?.capitalHallLevel}.png`,
        value: data?.clanCapital?.capitalHallLevel,
        title: `Capital level: ${data?.clanCapital?.capitalHallLevel}`,
      };

    return {};
  };

  return {
    mainInfo: {
      clanBanner: {
        img: data?.badgeUrls?.small,
        title: data.name,
        value: data.clanLevel,
      },
      capital: getCapitalLabel(),
      country: {
        img: `${data?.location?.countryCode ? `https://flagsapi.com/${data?.location?.countryCode}/flat/64.png` : ""}`,
        title: data?.location?.name,
        value: data?.location?.id,
      },
      name: data.name,
      tag: data.tag
    },

    trophies: getTrophies(),
    otherInfo: {
      level: {
        img: "http://localhost:8000/public/icons/exp.png",
        value: data.clanLevel,
      },
      members: {
        img: "http://localhost:8000/public/icons/players.webp",
        value: data.members,
      },
    },

    labels: data.labels.map((label) => {
      return {
        img: label?.iconUrls?.medium,
        title: label?.name,
        id: label?.id,
      };
    }),
  };
};

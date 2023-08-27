export const clanCardMaker = (data) => {
  const getTrophies = () => {
    return [
      {
        img: "http://localhost:8000/public/trophy/trophy.png",
        value: data.clanPoints,
      },
      {
        img: "http://localhost:8000/public/trophy/versus.png",
        value: data.clanBuilderBasePoints,
      },
      {
        img: "http://localhost:8000/public/trophy/capital.webp",
        value: data.clanCapitalPoints,
      },
    ];
  };

  const getCapitalLabel = () => {
    if (!!data?.clanCapital?.capitalHallLevel)
      return [
        {
          img: `http://localhost:8000/public/townhall/capital/${data?.clanCapital?.capitalHallLevel}.png`,
          title: `Capital level: ${data?.clanCapital?.capitalHallLevel}`,
        },
      ];

    return [];
  };

  return {
    img: `https://flagsapi.com/${data?.location?.countryCode}/flat/64.png`,
    headerCard: {
      object: {
        img: data?.badgeUrls?.small,
        title: data.name,
        name: data.name,
        tag: data.tag,
        type: "CLAN",
      },

      labels: getCapitalLabel(),
    },

    trophies: getTrophies(),

    otherInfo: [
      {
        img: "http://localhost:8000/public/icons/exp.png",
        value: data.clanLevel,
      },
      {
        img: "http://localhost:8000/public/icons/players.webp",
        value: data.members,
      },
    ],

    labels: data.labels.map((label) => {
      return { img: label?.iconUrls?.medium, title: label?.name };
    }),
  };
};

export const clanCardMaker = async (data, header) => {
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

  return {
    header: header,
    headerCard: {
      object: {
        img: data.badgeUrls.small,
        title: data.name,
        name: data.name,
        tag: data.tag,
      },

      labels: [
        {
          img: `http://localhost:8000/public/townhall/capital/${data.clanCapital.capitalHallLevel}.png`,
          title: `Capital level: ${data.clanCapital.capitalHallLevel}`,
        },
        {
          img: `https://flagsapi.com/${data.location.countryCode}/flat/64.png`,
          title: data.location.name,
        },
      ],
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
      return { img: label.iconUrls.medium, title: label.name };
    }),
  };
};

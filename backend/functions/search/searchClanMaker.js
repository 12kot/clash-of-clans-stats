export const searchClanMaker = (items) => {
  return items.map((item) => {
    return {
      tag: item.tag,
      name: item.name,
      img: item.badgeUrls.small,
      items: [
        {
          img: "http://localhost:8000/public/icons/exp.png",
          value: item.clanLevel,
        },
        {
          img: "http://localhost:8000/public/icons/players.webp",
          value: item.members,
        },
        {
          img: "http://localhost:8000/public/trophy/trophy.png",
          value: item.clanPoints,
        },
        {
          img: "http://localhost:8000/public/trophy/capital.webp",
          value: item.clanCapitalPoints,
        },
        {
          img: "http://localhost:8000/public/trophy/versus.png",
          value: item.clanBuilderBasePoints,
        },
      ],
    };
  });
};

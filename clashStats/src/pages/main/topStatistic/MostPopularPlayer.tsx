import React, { ReactElement } from "react";

import versusTrop from "assets/img/versus-trophy.png";
import { CardHeaderType, CardItemsType, LabelType } from "types/cardTypes";
import Card from "components/cards/Card";

const labels: LabelType[] = [
  { img: versusTrop, title: "a" },
  { img: versusTrop, title: "a" },
  { img: versusTrop, title: "a" },
];

const trophies: CardItemsType[] = [
  { img: versusTrop, value: 20000 },
  { img: versusTrop, value: 8743 },
  { img: versusTrop, value: 200 },
];
const otherInfo: CardItemsType[] = [
  { img: versusTrop, value: 13 },
  { img: versusTrop, value: 21 },
];

const headerCard: CardHeaderType = {
  player: {
    img: "https://api-assets.clashofclans.com/badges/70/SuLLCOjmNMlkKFFuHz0SRkXNcmpvSyOBz0MZXkQM4SE.png",
    name: "Отстранённые",
    tag: "#jekngkl",
  },

  labels: [
    {
      img: "https://api-assets.clashofclans.com/leagues/72/pSXfKvBKSgtvfOY3xKkgFaRQi0WcE28s3X35ywbIluY.png",
      title: "BY",
    },
    {
      img: "https://clashspot.net/media/game/ClanCapital/Capital/10.png",
      title: "BY",
    },
    { img: "https://flagsapi.com/BY/flat/64.png", title: "BY" },
  ],
};

const playerInfo = {
  header: "Самый популярный клан",
  labels,
  trophies,
  otherInfo,
  headerCard
}

const MostPopularPlayer = (): ReactElement => {
  return (
    <Card {...playerInfo} />
  );
};

export default MostPopularPlayer;

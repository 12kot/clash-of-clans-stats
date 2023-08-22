import React, { ReactElement } from "react";
import styles from "./Card.module.scss";
import CardHeader from "components/card/cardHeader/CardHeader";
import CardItems from "components/card/cardItems/CardItems";
import ClanLabels from "components/card/clanLabels/ClanLabels";
import versusTrop from "assets/img/versus-trophy.png";

type LabelType = {
  img: string;
  title: string;
};

const labels: LabelType[] = [
  { img: versusTrop, title: "a" },
  { img: versusTrop, title: "a" },
  { img: versusTrop, title: "a" },
];

const items1 = [
  { img: versusTrop, value: 20000 },
  { img: versusTrop, value: 8743 },
  { img: versusTrop, value: 200 },
];
const items2 = [
  { img: versusTrop, value: 13 },
  { img: versusTrop, value: 21 },
];

const headerCard = {
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

type Props = {
  header: string;
};

const ClanCard = ({ header }: Props): ReactElement => {
  return (
    <section className={styles.item}>
      <header className={styles.header}>
        <h2>{header}</h2>
      </header>

      <main className={styles.content}>
        <CardHeader {...headerCard} />
        <section className={styles.clanValues}>
          <CardItems items={items1} />
        </section>

        <section className={styles.clanValues}>
          <CardItems items={items2} />
          <ClanLabels labels={labels} />
        </section>
      </main>
    </section>
  );
};

export default ClanCard;

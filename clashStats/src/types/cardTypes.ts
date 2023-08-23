export type CardItemsType = {
  img: string;
  value: number;
};

export type LabelType = {
  img: string;
  title: string;
};

export type CardHeaderType = {
  object: {
    img: string;
    title: string;
    name: string;
    tag: string;
    type: "PLAYER" | "CLAN";
  };

  labels: LabelType[];
};

export type CardType = {
  img: string;
  headerCard: CardHeaderType;
  trophies: CardItemsType[];
  otherInfo: CardItemsType[];
  labels: LabelType[];
};

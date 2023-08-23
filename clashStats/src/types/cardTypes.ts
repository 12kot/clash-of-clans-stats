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
    name: string;
    tag: string;
  };

  labels: LabelType[];
};

export type CardType = {
  header: string;
  headerCard: CardHeaderType;
  trophies: CardItemsType[];
  otherInfo: CardItemsType[];
  labels: LabelType[];
};

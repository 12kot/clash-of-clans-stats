import { TSearchButton } from "types/types";

export interface TCardItems {
  img: string;
  value: number;
};

export interface TLabel {
  img: string;
  title: string;
};

export interface TCardHeader {
  object: {
    img: string;
    title: string;
    name: string;
    tag: string;
    type: TSearchButton;
  };

  labels: TLabel[];
};

export interface TCard {
  img: string;
  headerCard: TCardHeader;
  trophies: TCardItems[];
  otherInfo: TCardItems[];
  labels: TLabel[];
};

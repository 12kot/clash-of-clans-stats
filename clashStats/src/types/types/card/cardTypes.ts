import { TSearchButton } from "types/types";
import { TLabel } from "../label/labelTypes";

export interface TCardItem {
  img: string;
  value: number;
}

export interface TCardHeader {
  object: {
    img: string;
    title: string;
    name: string;
    tag: string;
    type: TSearchButton;
    role?: string;
  };

  labels: TLabel[];
}

export interface TCard {
  img: string;
  headerCard: TCardHeader;
  trophies: TCardItem[];
  otherInfo: TCardItem[];
  labels: TLabel[];
}

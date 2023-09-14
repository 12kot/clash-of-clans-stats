import { TSearchButton } from "types/types";
import { TMiniCard } from "../card/cardTypes";

interface TInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

interface TButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading: boolean;
}

export interface TSearchInput {
  input: TInput;
  button: TButton;
}

export interface TSearchInputresults {
  active: boolean;
  items: TMiniCard[];
  link: TSearchButton;
}

export interface TSearchInputWithResults extends TSearchInput {
  results: TSearchInputresults;
}

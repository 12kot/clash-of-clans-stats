import { TSearchButton } from "types/types";
import { TMiniCard } from "../card/cardTypes";

export interface TInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
    onKeyDown: () => void
  }

export interface TButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading: boolean;
  disabled: boolean;
  onClick: () => void;
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

import { v4 } from "uuid";
import { ReactElement } from "react";
import { TSearchCardClan, TSearchCardPlayer } from "types/types/slices/searchTypes";
import { InitCardPlayer } from "types/initial/card/cardInitial";
import Card from "components/card/Card";

export const getSearchCards = (items: TSearchCardPlayer | TSearchCardClan, styles: string): ReactElement[] | ReactElement => {
  if (items.loading)
    return [...Array(3)].map(() => (
      <Card {...InitCardPlayer} loading={true} key={v4()} />
    ));
  
  if (items.list.length === 0)
    return <h1 className={styles}>There's nothing here</h1>;

  return items.list.map((item) => (
    <Card {...item} loading={items.loading} key={v4()} />
  ));
};

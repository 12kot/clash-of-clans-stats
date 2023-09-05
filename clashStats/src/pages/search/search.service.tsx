import { v4 } from "uuid";
import { ReactElement } from "react";
import { TSearchCard } from "types/types/slices/searchTypes";
import { InitCard } from "types/initial/card/cardInitial";
import Card from "components/card/Card";

export const getSearchCards = (items: TSearchCard, styles: string): ReactElement[] | ReactElement => {
  if (items.loading)
    return [...Array(3)].map(() => (
      <Card {...InitCard} loading={true} key={v4()} />
    ));
  if (items.list.length === 0)
    return <h1 className={styles}>There's nothing here</h1>;

  return items.list.map((item) => (
    <Card {...item} loading={items.loading} key={v4()} />
  ));
};

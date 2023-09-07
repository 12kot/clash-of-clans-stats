import { v4 } from "uuid";
import { ReactElement } from "react";
import {
  TSearchCardClan,
  TSearchCardPlayer,
} from "types/types/slices/searchTypes";
import { InitCardPlayer } from "types/initial/card/cardInitial";
import Card from "components/card/basicCard/Card";
import LineCard from "components/card/lineCard/LineCard";
import styles from "./SearchService.module.scss";

export const getSearchCards = (
  items: TSearchCardPlayer | TSearchCardClan
): ReactElement[] | ReactElement => {
  if (items.loading)
    return [...Array(3)].map(() => (
      <Card card={InitCardPlayer} loading={true} key={v4()} />
    ));

  if (items.list.length === 0)
    return <h1 className={styles.emptyList}>There's nothing here</h1>;

  return items.list.map((item) => (
    <LineCard card={item} loading={items.loading} key={v4()} />
  ));
};

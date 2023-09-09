import { v4 } from "uuid";
import { ReactElement } from "react";
import {
  TSearchCardClan,
  TSearchCardPlayer,
} from "types/types/slices/searchTypes";
import LineCard from "components/card/basicCard/clan/lineCard/LineCard";
import styles from "./SearchService.module.scss";
import CardLoader from "components/loader/cardLoader/CardLoader";
import CardBasicClan from "components/card/basicCard/clan/blockCard/Card";

export const getSearchCards = (
  loading: boolean,
  isEmpty: boolean
): ReactElement[] | ReactElement | undefined => {
  if (loading)
    return [...Array(3)].map(() => (
      <CardLoader key={v4()} />
    ));

  if (isEmpty)
    return <h1 className={styles.emptyList}>There's nothing here</h1>;
};

// export const getSearchPlayers = (items: TSearchCardPlayer): ReactElement[] | ReactElement => {
//   const data = getSearchCards(items.loading, items.list.length === 0);

//   if (data) return data;

//   return items.list.map((item) => (
//     <Card card={item} key={v4()} />
//   ));
// }

export const getSearchClans = (items: TSearchCardClan): ReactElement[] | ReactElement => {
  const data = getSearchCards(items.loading, items.list.length === 0);

  if (data) return data;

  return items.list.map((item) => (
    <CardBasicClan card={item} key={v4()} />
  ));
}

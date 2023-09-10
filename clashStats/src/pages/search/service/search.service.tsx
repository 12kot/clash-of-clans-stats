import { v4 } from "uuid";
import { ReactElement } from "react";
import {
  TSearchCardClan,
  TSearchCardPlayer,
} from "types/types/slices/searchTypes";
import styles from "./SearchService.module.scss";
import CardBasicClan from "components/card/basicCard/clan/blockCard/Card";
import LineCardLoader from "components/loader/cardLoader/lineCard/LineCardLoader";
import CardBasicPlayer from "components/card/basicCard/player/blockCard/Card";
import BlockCardLoader from "components/loader/cardLoader/blockCard/BlockCardLoader";

export const getSearchCards = (
  loading: boolean,
  isEmpty: boolean
): ReactElement[] | ReactElement | undefined => {
  if (loading) return [...Array(3)].map(() => <BlockCardLoader key={v4()} />);

  if (isEmpty)
    return <h1 className={styles.emptyList}>There's nothing here</h1>;
};

export const getSearchPlayers = (items: TSearchCardPlayer): ReactElement[] | ReactElement => {
  const data = getSearchCards(items.loading, items.list.length === 0);

  if (data) return data;

  return items.list.map((item) => (
    <CardBasicPlayer card={item} key={v4()} loading={items.loading} />
  ));
}

export const getSearchClans = (
  items: TSearchCardClan
): ReactElement[] | ReactElement => {
  const data = getSearchCards(items.loading, items.list.length === 0);

  if (data) return data;

  return items.list.map((item) => (
    <CardBasicClan card={item} key={v4()} loading={items.loading} />
  ));
};

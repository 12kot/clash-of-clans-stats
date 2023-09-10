import { v4 } from "uuid";
import { ReactElement } from "react";
import {
  TSearchCardClan,
  TSearchCardPlayer,
} from "types/types/slices/searchTypes";
import LineCard from "components/card/basicCard/clan/lineCard/LineCard";
import styles from "./SearchService.module.scss";
import CardBasicClan from "components/card/basicCard/clan/blockCard/Card";
import { InitCardBasic } from "types/initial/card/basic/cardBasicInitial";
import { InitCardBasicClan } from "types/initial/card/basic/clan/cardBasicClanInitial";
import BlockCardLoader from "components/loader/cardLoader/blockCard/BlockCardLoader";
import LineCardLoader from "components/loader/cardLoader/lineCard/LineCardLoader";
import LineCardBasicPlayer from "components/card/basicCard/player/lineCard/LineCard";
import { InitCardBasicPlayer } from "types/initial/card/basic/player/cardBasicPlayerInitial";
import CardBasicPlayer from "components/card/basicCard/player/blockCard/Card";

export const getSearchCards = (
  loading: boolean,
  isEmpty: boolean
): ReactElement[] | ReactElement | undefined => {
  if (loading) return [...Array(3)].map(() => <LineCardLoader key={v4()} />);

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

export const getSearchClans = (
  items: TSearchCardClan
): ReactElement[] | ReactElement => {
  return [...Array(10)].map(() => (
    <CardBasicPlayer
      card={InitCardBasicPlayer}
      loading={false}
      key={v4()}
    />
  ));

  // const data = getSearchCards(items.loading, items.list.length === 0);

  // if (data) return data;

  return items.list.map((item) => (
    <CardBasicClan card={item} key={v4()} loading={items.loading} />
  ));
};

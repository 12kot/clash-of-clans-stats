import React, { ReactElement } from "react";
import InputSearchResults from "./Results";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { TMiniCard } from "types/types/card/cardTypes";
import { useAppSelector } from "hooks/store";
import { selectSearchPlayers } from "store/selectors/searchSelectors";

type Props = {
  value: string;
};

const getResObj = (items: TCardBasicPlayer[]): TMiniCard[] => {
  return items.map((item) => {
    return {
      img: item.mainInfo.townHall,
      name: item.mainInfo.name,
      tag: item.mainInfo.tag,
    };
  });
};

const InputSearchResultsPlayers = ({ value }: Props): ReactElement => {
  const data = useAppSelector(selectSearchPlayers);
  

  return (
    <InputSearchResults items={getResObj(data.list)} link={"player"} value={value} />
  );
};

export default InputSearchResultsPlayers;

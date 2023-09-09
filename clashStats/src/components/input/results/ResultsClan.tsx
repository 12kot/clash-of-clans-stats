import React, { ReactElement } from "react";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import InputSearchResults from "./Results";
import { TMiniCard } from "types/types/card/cardTypes";
import { useAppSelector } from "hooks/store";
import { selectSearchClans } from "store/selectors/searchSelectors";

type Props = {
  value: string;
};

const getResObj = (items: TCardBasicClan[]): TMiniCard[] => {
  return items.map((item) => {
    return {
      img: item.mainInfo.clanBanner,
      name: item.mainInfo.name,
      tag: item.mainInfo.tag,
    };
  });
};

const InputSearchResultsClans = ({ value }: Props): ReactElement => {
  const data = useAppSelector(selectSearchClans);

  return (
    <InputSearchResults
      items={getResObj(data.list)}
      link={"clan"}
      value={value}
    />
  );
};

export default InputSearchResultsClans;

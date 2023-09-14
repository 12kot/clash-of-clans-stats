import { TSearchButton } from "types/types";
import { TCardBasicClan } from "types/types/card/basic/clan/cardBasicClanTypes";
import { TCardBasicPlayer } from "types/types/card/basic/player/cardBasicPlayerTypes";
import { TMiniCard } from "types/types/card/cardTypes";
import {
  TSearchInput,
  TSearchInputWithResults,
} from "types/types/search/searchTypes";

interface TgetInputObj {
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  value: string;
  disabled: boolean;
  loading: boolean;
}

export const getInputObj = ({
  placeholder,
  value,
  onChange,
  onClick,
  disabled,
  loading,
}: TgetInputObj): TSearchInput => {
  return {
    input: {
      placeholder: placeholder,
      value,
      onChange,
    },

    button: {
      disabled: disabled,
      onClick,
      loading: loading,
    },
  };
};

interface TgetInputWhitResultsObj extends TgetInputObj {
  active: boolean;
  link: TSearchButton;
}

const basicClanCardToMiniCard = (items: TCardBasicClan[]): TMiniCard[] => {
  return items.map((item) => {
    return {
      img: item.mainInfo.clanBanner,
      name: item.mainInfo.name,
      tag: item.mainInfo.tag,
    };
  });
};

interface TgetInputClanWhitResultsObj extends TgetInputWhitResultsObj {
  items: TCardBasicClan[];
}

export const getInputClanWhitResultsObj = ({
  ...restProps
}: TgetInputClanWhitResultsObj): TSearchInputWithResults => {
  return {
    ...getInputObj(restProps),
    results: {
      items: basicClanCardToMiniCard(restProps.items),
      active: restProps.active,
      link: restProps.link,
    },
  };
};

interface TgetInputPlayerWhitResultsObj extends TgetInputWhitResultsObj {
  items: TCardBasicPlayer[];
}

const basicPlayerCardToMiniCard = (items: TCardBasicPlayer[]): TMiniCard[] => {
  return items.map((item) => {
    return {
      img: item.mainInfo.townHall,
      name: item.mainInfo.name,
      tag: item.mainInfo.tag,
    };
  });
};

export const getInputPlayerWhitResultsObj = ({
  ...restProps
}: TgetInputPlayerWhitResultsObj): TSearchInputWithResults => {
  return {
    ...getInputObj(restProps),
    results: {
      items: basicPlayerCardToMiniCard(restProps.items),
      active: restProps.active,
      link: restProps.link,
    },
  };
};

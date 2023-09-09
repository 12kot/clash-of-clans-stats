import Input from "components/input/Input";
import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { selectSearchClans } from "store/selectors/searchSelectors";
import { searchClans } from "store/slices/SearchSlice";
import { TBasicCardClan } from "types/types/card/basic/clan/basicClanCardTypes";
import { TSearchCardClan } from "types/types/slices/searchTypes";

type Props = { onResults: boolean };

const ClanInput = ({ onResults }: Props): ReactElement => {
  const navigate = useNavigate();
  const { value, onChange } = useInput("");
  const { data } = useSearch<TBasicCardClan, TSearchCardClan>(
    value,
    searchClans,
    selectSearchClans
  );

  const OnClick = (): void => {
    navigate(`/search/clan?tag=${value}`);
  };

  return (
    <Input
      placeholder="Clan name or tag"
      value={value}
      onChange={onChange}
      type="CLAN"
      onClickButton={OnClick}
      disabledButton={value.length <= 3 || data.loading}
      loading={data.loading}
      result={onResults ? data.list : undefined}
    />
  );
};

export default ClanInput;

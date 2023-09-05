import Input from "components/input/Input";
import { useInput } from "hooks/input/useInput";
import { useSearch } from "hooks/search/useSearch";
import { useAppSelector } from "hooks/store";
import React, { ReactElement } from "react";
import { selectSearchClans } from "store/selectors/searchSelectors";
import { searchClans } from "store/slices/SearchSlice";

type Props = { onResults: boolean };

const ClanInput = ({ onResults }: Props): ReactElement => {
  const clans = useAppSelector(selectSearchClans);
  const { value, onChange } = useInput("");
  const { OnClick } = useSearch(value, searchClans);

  return (
    <Input
      placeholder="Clan name or tag"
      value={value}
      onChange={onChange}
      type="CLAN"
      onClickButton={OnClick}
      disabledButton={value.length <= 3 || clans.loading}
      loading={clans.loading}
      result={onResults ? clans.list : undefined}
    />
  );
};

export default ClanInput;

import Input from "components/input/Input";
import { useAppDispatch, useAppSelector } from "hooks/store";
import React, { ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectSearchClans } from "store/selectors/searchSelectors";
import { searchClans } from "store/slices/SearchSlice";

const ClanInput = (): ReactElement => {
  const clans = useAppSelector(selectSearchClans);
  const dispatch = useAppDispatch();

  const [searchClan, setSearchClan] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchClan.length > 3)
      setTimeout(() => {
        dispatch(searchClans({ name: searchClan }));
      }, 300);
  }, [dispatch, searchClan]);

  const handleSearchClan = (): void => {
    navigate(`/search/clan/${searchClan}`);
  };

  return (
    <Input
      type="CLAN"
      placeholder="Clan name or tag"
      value={searchClan}
      onChange={setSearchClan}
      onClick={handleSearchClan}
      disabled={searchClan.length <= 3 || clans.loading}
      loading={clans.loading}
      results={clans.list}
    />
  );
};

export default ClanInput;

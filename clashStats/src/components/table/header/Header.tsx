import React, { ReactElement, useState } from "react";
import styles from "./Header.module.scss";
import { getClanMembers } from "store/slices/ClanSlice";
import { useAppDispatch } from "hooks/store";

const Header = (): ReactElement => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    dispatch(getClanMembers({ clanTag: search }));
  };

  return (
    <section className={styles.searchClan}>
      <p className={styles.item}>
        Отстранённые (<span>#2QCRVUC99</span>)
      </p>
      <div className={styles.item}>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>SEARCH</button>
      </div>
    </section>
  );
};

export default Header;

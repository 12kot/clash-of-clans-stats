import React, { ReactElement, useEffect, useState } from "react";
import styles from "./Main.module.scss";
import { useAppDispatch, useAppSelector } from "hooks/store";
import { getClanMembers } from "store/slices/ClanSlice";
import { playerType } from "types/types";

const getTableItems = (clanMembers: playerType[]): ReactElement[] => {
  return clanMembers.map((member, index) => (
    <tr key={index} className={styles.item}>
      <th>{index + 1}.</th>
      <td>{member.name}</td>
      <td>{member.tag}</td>
      <td>{member.expLevel}</td>
      <td>{member.trophies}</td>
      <td>{member.builderBaseTrophies}</td>
      <td>{member.donations}</td>
      <td>{member.donationsReceived}</td>
      <td>{member.role}</td>
    </tr>
  ));
};

const Main = (): ReactElement => {
  const dispatch = useAppDispatch();
  const clanMembers = useAppSelector((state) => state.clan.clanMembers);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    dispatch(getClanMembers({ clanTag: "2QCRVUC99" }));
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(getClanMembers({ clanTag: search }));
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.about}>Это суперуникальный проект по клешу</h1>
      <article className={styles.tableContainer}>
        <section className={styles.searchClan}>
          <p className={styles.item}>
            Отстранённые (<span>#2QCRVUC99</span>)
          </p>
          <div className={styles.item}>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            <button onClick={handleSearch}>SEARCH</button>
          </div>
        </section>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>№</th>
                <th>Ник</th>
                <th>Тэг</th>
                <th>Опыт</th>
                <th>Кубки</th>
                <th>ДС кубки</th>
                <th>Донат</th>
                <th>Получено</th>
                <th>Звание</th>
              </tr>
            </thead>
            <tbody>{getTableItems(clanMembers.items)}</tbody>
          </table>
        </div>
      </article>
    </main>
  );
};

export default Main;

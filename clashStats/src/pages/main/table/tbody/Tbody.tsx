import React, { ReactElement } from "react";
import styles from "./Tbody.module.scss";
import { useAppSelector } from "hooks/store";
import { playerType } from "types/types";

const getTableItems = (clanMembers: playerType[]): ReactElement[] => {
  return clanMembers.map((member, index) => (
    <tr key={index} className={styles.row}>
      <th>
        <div className={styles.cell}>{index + 1}.</div>
      </th>
      <td>
        <div className={styles.cell}>{member.name}</div>
      </td>
      <td>
        <div className={styles.cell}>{member.tag}</div>
      </td>
      <td>
        <div className={styles.cell}>{member.expLevel}</div>
      </td>
      <td>
        <div className={styles.cell}>
          <img src={member.league.iconUrls.small} alt=""></img>

          <span>{member.trophies}</span>
        </div>
      </td>
      <td>
        <div className={styles.cell}>{member.builderBaseTrophies}</div>
      </td>
      <td>
        <div className={styles.cell}>{member.donations}</div>
      </td>
      <td>
        <div className={styles.cell}>{member.donationsReceived}</div>
      </td>
      <td>
        <div className={styles.cell}>{member.role}</div>
      </td>
    </tr>
  ));
};

const Tbody = (): ReactElement => {
  const clanMembers = useAppSelector((state) => state.clan.clanMembers);

  return (
    <tbody className={styles.container}>
      {getTableItems(clanMembers.items)}
    </tbody>
  );
};

export default Tbody;

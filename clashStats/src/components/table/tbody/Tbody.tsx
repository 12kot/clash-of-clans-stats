import React, { ReactElement } from "react";
import styles from "./Tbody.module.scss";
import { useAppSelector } from "hooks/store";
import { playerType } from "types/types";
import experience from "assets/experience.png";
import versusrTrophy from "assets/versus-trophy.png";

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
        <div className={styles.cell}>
          <span>{member.expLevel}</span>
          <img src={experience} alt={"experience"} />
        </div>
      </td>
      <td>
        <div className={styles.cell}>
          <span>{member.trophies}</span>
          <img src={member.league.iconUrls.small} alt={member.league.name} />
        </div>
      </td>
      <td>
        <div className={styles.cell}>
          <span>{member.builderBaseTrophies}</span>
          <img src={versusrTrophy} alt={"versusTrophy"} />
        </div>
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

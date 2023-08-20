import React, { ReactElement } from "react";
import styles from "./Thead.module.scss";

const Thead = (): ReactElement => {
  return (
    <thead className={styles.container}>
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
  );
};

export default Thead;

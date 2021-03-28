import type {FC} from 'react';
import {useMemo} from "react";
import {ServerStatusEnum, ServerStatusModel} from "../../model";
import {Card, Centered} from "../../../components";
import styles from "./server-status-card.module.scss"
import classNames from "classnames";

const ServerStatusCard: FC<{ status: ServerStatusModel }> = ({status}) => {
  const rowsObject: Record<string, { text: string | number, className?: string }> = useMemo(() => ({
    Name: {
      text: status.name
    },
    Status: {
      text: status.status,
      className: status.status === ServerStatusEnum.ONLINE ? styles.success : styles.danger
    },
    Players: {
      text: status.players > 0 ? status.players : "none",
    },
    Version: {
      text: status.version,
    }
  }), [status]);

  const rows = useMemo(() => Object.keys(rowsObject).map(i => {
    const row = rowsObject[i];

    return (
      <tr key={i}>
        <td className={classNames(styles.title, styles.column)}>{i}</td>
        <td className={classNames(row.className, styles.column, styles.value)}>{row.text}</td>
      </tr>
    );
  }), [rowsObject])

  return (
    <Card>
      <Centered>
        <table>
          <tbody>
          {rows}
          </tbody>
        </table>
      </Centered>
    </Card>
  );
};

export {ServerStatusCard};

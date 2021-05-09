import type { FC } from "react";
import { useMemo } from "react";
import { ServerStatusEnum } from "../../model";
import { Card, Centered } from "../../../components";
import styles from "./server-status-card.module.scss";
import classNames from "classnames";

interface IServerStatusCardProps {
  status: ServerStatusEnum;
  name: string;
  players: number;
  version: string;
}

const ServerStatusCard: FC<IServerStatusCardProps> = ({ status, name, players, version }) => {
  const rowsObject: Record<string, { text: string | number; className?: string }> = useMemo(
    () => ({
      Name: {
        text: name,
      },
      Status: {
        text: status,
        className: status === ServerStatusEnum.ONLINE ? styles.success : styles.danger,
      },
      Players: {
        text: players > 0 ? players : "none",
        className: players > 0 && styles.bold,
      },
      Version: {
        text: version,
      },
    }),
    [name, players, status, version],
  );

  const rows = useMemo(
    () =>
      Object.keys(rowsObject).map((i) => {
        const row = rowsObject[i];

        return (
          <tr key={i}>
            <td className={classNames(styles.title, styles.column)}>{i}</td>
            <td className={classNames(row.className, styles.column, styles.value)}>{row.text}</td>
          </tr>
        );
      }),
    [rowsObject],
  );

  return (
    <Card>
      <h1>
        Valheim Server{" "}
        <span
          className={classNames(styles.dot, {
            [styles.dotSuccess]: status === ServerStatusEnum.ONLINE,
            [styles.dotDanger]: status === ServerStatusEnum.OFFLINE,
          })}
        >
          ◉
        </span>
      </h1>

      <Centered>
        <table>
          <tbody>{rows}</tbody>
        </table>
      </Centered>
    </Card>
  );
};

export { ServerStatusCard };

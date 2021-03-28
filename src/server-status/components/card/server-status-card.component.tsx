import type {FC} from 'react';
import {ServerStatusEnum, ServerStatusModel} from "../../model";
import {Card, Centered} from "../../../components";
import styles from "./server-status-card.module.scss"
import classNames from "classnames";

const ServerStatusCard: FC<{ status: ServerStatusModel }> = ({status}) => {
  return (
    <Card>
      <Centered>
        <ul className={styles.ul}>
            <li><b>Name:</b> {status.name}</li>
            <li className={classNames({
              [styles.success]: status.status === ServerStatusEnum.ONLINE,
              [styles.danger]: status.status === ServerStatusEnum.OFFLINE,
            })}><b>Status:</b> {status.status}</li>
            <li><b>Players:</b> {status.players > 0 ? status.players : "none"}</li>
            <li><b>Version:</b> {status.version}</li>
        </ul>
      </Centered>
    </Card>
  );
};

export {ServerStatusCard};

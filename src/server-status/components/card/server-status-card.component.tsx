import type {FC} from 'react';
import {ServerStatusModel} from "../../model";
import {Card, Centered} from "../../../components";
import styles from "./server-status-card.module.scss"

const ServerStatusCard: FC<{ status: ServerStatusModel }> = ({status}) => {
  const items = Object.keys(status).map(i => (<li key={i}>
    <b>{i}:</b> {status[i]}
  </li>));

  return (
    <Card>
      <Centered>
        <ul className={styles.ul}>
          {items}
        </ul>
      </Centered>
    </Card>
  );
};

export {ServerStatusCard};

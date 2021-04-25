import type { FC } from "react";
import styles from "./card.module.scss";

const Card: FC = (props) => <div className={styles.root}>{props.children}</div>;

export { Card };

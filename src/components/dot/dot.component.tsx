import type {FC} from 'react';
import styles from "./dot.module.scss";

const Dot: FC<{
  color?: string;
  size?: number;
}> = (props) => {
  const size = props.size ?? 0.5;
  const color = props.color ?? "#eee";

  return (
    <span className={styles.root} style={{height: `${size}em`, width: `${size}em`, backgroundColor: color}}/>
  );
};

export {Dot};

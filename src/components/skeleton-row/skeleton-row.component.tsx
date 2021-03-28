import type {CSSProperties, FC} from 'react';
import styles from "./skeleton-row.module.scss"

const SkeletonRow: FC<{style?: CSSProperties}> = ({style}) =>
  (
    <div className={styles.root} style={style}/>
  );

export {SkeletonRow};

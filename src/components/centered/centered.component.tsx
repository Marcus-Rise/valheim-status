import type {FC} from 'react';
import styles from "./centered.module.scss";
import classNames from "classnames";

const Centered: FC<{splash?: boolean, column?: boolean}> = (props) => {
  return (
    <div className={classNames(styles.root, {
      [styles.splash]: props.splash,
      [styles.column]: props.column,
    })}>
      {props.children}
    </div>
  );
};

export {Centered};

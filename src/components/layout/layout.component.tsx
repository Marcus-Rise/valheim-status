import type {FC} from 'react';
import styles from "./layout.module.scss"

const Layout: FC = (props) => {
  return (
    <>
     <main className={styles.root}>{props.children}</main>
    </>
  );
};

export {Layout};
